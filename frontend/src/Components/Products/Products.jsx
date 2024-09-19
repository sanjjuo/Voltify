import React, { useEffect, useState } from 'react';
import { products } from '../../data';
import { GoHeart } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { HiPlus } from "react-icons/hi2";
import { PiEye } from "react-icons/pi";
import { motion } from 'framer-motion';
import { LuFilter } from "react-icons/lu";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineProduct } from "react-icons/ai";
import { IoMdLaptop } from "react-icons/io";
import { IoHeadsetOutline } from "react-icons/io5";
import { GiEarbuds } from "react-icons/gi";
import { BsEarbuds } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiVirtualRealityLight } from "react-icons/pi";

const Products = () => {
    const [filter, setFilter] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFilter = (category) => {
        const CategoryItems = products.filter((item) => item.category === category)
        setFilter(CategoryItems)
        console.log(category);
    }

    useEffect(() => {
        setFilter(products)
    }, [])
    return (
        <div className='py-20 dark:bg-gray-900 dark:text-white'>
            <div className="container">
                <h1 className='text-center font-extrabold'>Our Products</h1>
                <p className='text-center font-light text-gray-400'>Explore our products</p>
                <div className='hidden lg:flex justify-around items-center mt-16'>
                    <ul className='flex justify-center items-center gap-16 p-0 m-0 '>
                        <li className='text-lg font-light transition-all duration-500 ease-out transform 
                    scale-100 hover:scale-110 cursor-pointer hover:!text-primary' onClick={() => setFilter(products)}>All</li>
                        <li className='text-lg font-light transition-all duration-500 ease-out transform 
                    scale-100 hover:scale-110 cursor-pointer hover:!text-primary' onClick={() => handleFilter("laptop")}>Laptops</li>
                        <li className='text-lg font-light transition-all duration-500 ease-out transform 
                    scale-100 hover:scale-110 cursor-pointer hover:!text-primary' onClick={() => handleFilter("headphone")}>Headphone</li>
                        <li className='text-lg font-light transition-all duration-500 ease-out transform 
                    scale-100 hover:scale-110 cursor-pointer hover:!text-primary' onClick={() => handleFilter("earbud")}>Earbud</li>
                        <li className='text-lg font-light transition-all duration-500 ease-out transform 
                    scale-100 hover:scale-110 cursor-pointer hover:!text-primary' onClick={() => handleFilter("earphone")}>Earphone</li>
                        <li className='text-lg font-light transition-all duration-500 ease-out transform 
                    scale-100 hover:scale-110 cursor-pointer hover:!text-primary' onClick={() => handleFilter("laptop")}>Gaming</li>
                        <li className='text-lg font-light transition-all duration-500 ease-out transform 
                    scale-100 hover:scale-110 cursor-pointer hover:!text-primary' onClick={() => handleFilter("laptop")}>Virtual</li>
                    </ul>
                    <ul className='p-0 m-0'>
                        <li className='bg-brandWhite py-2 px-3 rounded-full flex items-center cursor-pointe gap-2 '>
                            <IoSearchOutline className='text-[20px] text-gray-500' />
                            <input type="search" name="" id="" placeholder='Search Products' className='bg-transparent outline-none'/>
                        </li>
                    </ul>
                </div>

                {/* mobile links */}

                <div className='mt-10 lg:hidden'>
                    <ul className='flex items-center gap-2 p-0 m-0'>
                        <li onClick={handleShow} className='!bg-primary text-white rounded-full w-[35px] h-[30px] flex justify-center items-center'><LuFilter /></li>
                        <li className='border-1 !border-primary flex items-center rounded-full w-full py-1 px-2'><IoSearchOutline className='!text-primary'/><input type="search" name="" id="" className='rounded-xl outline-none text-gray-600 border-none' /></li>
                    </ul>

                    <Offcanvas show={show} onHide={handleClose} className="!bg-gray-100 !w-[75%]">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className='!text-primary !font-semibold'>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ul className='p-0 m-0 space-y-8'>
                                <li className='flex items-center gap-1 text-lg text-gray-600 transition 
                                duration-500 transform scale-100 hover:text-primary hover:scale-105' onClick={() => setFilter(products)}><AiOutlineProduct/>All</li>
                                <li className='flex items-center gap-1 text-lg text-gray-600 transition 
                                duration-500 transform scale-100 hover:text-primary hover:scale-105' onClick={() => handleFilter("laptop")}><IoMdLaptop/>Laptops</li>
                                <li className='flex items-center gap-1 text-lg text-gray-600 transition 
                                duration-500 transform scale-100 hover:text-primary hover:scale-105' onClick={() => handleFilter("headphone")} ><IoHeadsetOutline/>Headphones</li>
                                <li className='flex items-center gap-1 text-lg text-gray-600 transition 
                                duration-500 transform scale-100 hover:text-primary hover:scale-105' onClick={() => handleFilter("earbud")} ><GiEarbuds/>Earbuds</li>
                                <li className='flex items-center gap-1 text-lg text-gray-600 transition 
                                duration-500 transform scale-100 hover:text-primary hover:scale-105' onClick={() => handleFilter("earphone")} ><BsEarbuds/>Earphones</li>
                                <li className='flex items-center gap-1 text-lg text-gray-600 transition 
                                duration-500 transform scale-100 hover:text-primary hover:scale-105' onClick={() => handleFilter("laptop")} ><IoGameControllerOutline/>Gaming</li>
                                <li className='flex items-center gap-1 text-lg text-gray-600 transition 
                                duration-500 transform scale-100 hover:text-primary hover:scale-105' onClick={() => handleFilter("laptop")} ><PiVirtualRealityLight/>Virtual</li>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>

                </div>

                {/* product cards */}

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filter.map((product, index) => (
                        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} key={index} className='cursor-pointer mt-5'>
                            <div className='relative w-full h-[350px] group overflow-hidden'>
                                <img src={product.image} alt="" className='w-full h-full transition-all duration-1000 ease-in-out transform scale-100 group-hover:scale-110' />
                                <ul className='p-0 m-0 absolute bottom-3 right-5 space-y-2 transition-all duration-500 ease-in-out transform translate-x-96 group-hover:translate-x-2'>
                                    <li className='!bg-primary text-white w-[40px] h-[40px] flex justify-center items-center text-[23px]'><HiPlus /></li>
                                    <li className='bg-white text-gray-800 w-[40px] h-[40px] flex justify-center items-center text-[23px]'><PiEye /></li>
                                </ul>
                            </div>
                            <div>
                                <ul className='p-0 m-0 flex justify-between items-center pt-2'>
                                    <li className='flex flex-col'>
                                        <span className='text-gray-500 font-light'>{product.title}</span>
                                        <span className='font-normal text-gray-700 text-lg'>Rs.{product.price}</span>
                                    </li>
                                    <li><GoHeart className='text-xl text-gray-500' /></li>
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Products
