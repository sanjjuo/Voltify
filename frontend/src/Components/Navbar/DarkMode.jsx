import React, { useEffect, useState } from 'react';
import { HiOutlineMoon } from "react-icons/hi2";
import { FiSun } from "react-icons/fi";


const DarkMode = () => {
  // Initialize state from localStorage, default to 'false' (light mode)
  const [dark, setDark] = useState(localStorage.getItem('dark') === 'true' || false);

  // access the HTML document element
  const element = document.documentElement;

  // Update the HTML element class and localStorage whenever the `dark` state changes
  useEffect(() => {
    localStorage.setItem('dark', dark);
    if (dark) {
      element.classList.add("dark");
      console.log('Dark mode enabled');
    } else {
      element.classList.remove("dark");
      console.log('Dark mode disabled');
    }
  }, [dark]); // Add `dark` to dependencies so useEffect runs when it changes

  // Toggle dark mode
  const handleTheme = () => {
    setDark(prevDark => !prevDark);
  };

  return (
    <div onClick={handleTheme} className="cursor-pointer">
      {dark ? (
        <FiSun className='bg-brandYellow w-6 h-6 lg:w-7 lg:h-7 p-1 rounded-3xl text-2xl text-gray-200' />
      ) : (
        <HiOutlineMoon className='bg-gray-700 w-6 h-6 lg:w-7 lg:h-7 p-1 rounded-3xl text-xl text-white' />
      )}
    </div>
  );
};

export default DarkMode;
