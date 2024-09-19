import React from 'react'
import { BiBoltCircle } from 'react-icons/bi'
import { LiaTelegram } from "react-icons/lia";
import { MdPhoneAndroid } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <section className='p-[16px_16px_50px] dark:bg-gray-900 dark:text-white'>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* company details */}
                    <div className='py-8 px-2 pb-0 lg:pb-8'>
                        <h1 className='!text-primary font-normal !text-3xl tracking-wider uppercase cursor-pointer flex items-center mb-4'>
                        V<BiBoltCircle />ltify
                        </h1>
                        <p className='font-light text-gray-600 text-justify dark:text-white mt-0 mb-2'>Voltify is a cutting-edge tech company offering a wide range of high-quality gadgets, including laptops, smartwatches, headsets, earphones, AirPods,
                            and virtual gaming consoles like PlayStation. We are dedicated to delivering the latest in technology to enhance your digital lifestyle, combining
                            performance, style, and innovation.</p>
                        <p className='font-light text-gray-600 dark:text-white m-0'>Made with ❤️ by Mohamed Sanjeed k</p>
                    </div>

                    {/* important links */}
                    <div className='py-8 px-2 pb-0 lg:pb-8'>
                        <h1 className='text-gray-700 text-2xl m-0 dark:text-white mb-4'>Important Links</h1>
                        <ul className='p-0 space-y-5 m-0'>
                            <li className='font-light'>Home</li>
                            <li className='font-light'>About</li>
                            <li className='font-light'>Contact</li>
                            <li className='font-light'>Blog</li>
                        </ul>
                    </div>

                    {/* links */}
                    <div className='py-8 px-2 pb-0 lg:pb-8'>
                        <h1 className='text-gray-700 text-2xl m-0 dark:text-white mb-4'>Quick Links</h1>
                        <ul className='p-0 space-y-5 m-0'>
                            <li className='font-light'>Trending Products</li>
                            <li className='font-light'>Best Selling</li>
                            <li className='font-light'>Top Rated</li>
                        </ul>
                    </div>

                    {/* contact */}

                    <div className='py-8 px-2 pb-10 lg:pb-8'>
                        <ul className='p-0 m-0 space-y-10'>
                            <li className='font-light flex items-center gap-2 text-md text-gray-600 dark:text-white'><LiaTelegram className='text-3xl' />Malappuram, Kerala, India</li>
                            <li className='font-light flex items-center gap-2 text-md text-gray-600 dark:text-white'><MdPhoneAndroid className='text-3xl'/>+91 7902501645</li>
                            <li>
                                <ul className='p-0 m-0 flex items-center gap-4'>
                                    <li className='text-2xl text-gray-600 dark:text-white'><FiInstagram /></li>
                                    <li className='text-2xl text-gray-600 dark:text-white'><FaFacebookF /></li>
                                    <li className='text-2xl text-gray-600 dark:text-white'><FaLinkedinIn /></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
