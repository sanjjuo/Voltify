import React, { useEffect, useState } from 'react';
import { products } from '../../data';
import { GoHeart } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { HiPlus } from "react-icons/hi2";
import { PiEye } from "react-icons/pi";

const Products = () => {
    const [filter, setFilter] = useState([])

    const handleFilter = (category) => {
        const CategoryItems = products.filter((item) => item.category === category)
        setFilter(CategoryItems)
        console.log(category);
    }

    useEffect(()=>{
        setFilter(products)
    },[])
    return (
        <div className='py-20 dark:bg-gray-900 dark:text-white'>
            <div className="container">
                <h1 className='text-center font-extrabold'>Our Products</h1>
                <p className='text-center font-light text-gray-400'>Explore our products</p>
                <div className='flex justify-around items-center mt-16'>
                    <ul className='flex justify-center items-center gap-16 p-0 m-0 '>
                        <li className='text-lg font-light transition-all duration-500 ease-out transform 
                    scale-100 hover:scale-110 cursor-pointer hover:!text-primary' onClick={()=>setFilter(products)}>All</li>
                        <li className='text-lg font-light transition-all duration-500 ease-out transform 
                    scale-100 hover:scale-110 cursor-pointer hover:!text-primary' onClick={()=>handleFilter("laptop")}>Laptops</li>
                        <li className='text-lg font-light transition-all duration-500 ease-out transform 
                    scale-100 hover:scale-110 cursor-pointer hover:!text-primary' onClick={()=>handleFilter("laptop")}>Headphone</li>
                        <li className='text-lg font-light transition-all duration-500 ease-out transform 
                    scale-100 hover:scale-110 cursor-pointer hover:!text-primary' onClick={()=>handleFilter("laptop")}>Earbud</li>
                        <li className='text-lg font-light transition-all duration-500 ease-out transform 
                    scale-100 hover:scale-110 cursor-pointer hover:!text-primary' onClick={()=>handleFilter("laptop")}>Earphone</li>
                        <li className='text-lg font-light transition-all duration-500 ease-out transform 
                    scale-100 hover:scale-110 cursor-pointer hover:!text-primary' onClick={()=>handleFilter("laptop")}>Gaming</li>
                        <li className='text-lg font-light transition-all duration-500 ease-out transform 
                    scale-100 hover:scale-110 cursor-pointer hover:!text-primary' onClick={()=>handleFilter("laptop")}>Virtual</li>
                    </ul>
                    <ul className='p-0 m-0'>
                        <li className='bg-brandWhite w-[35px] h-[35px] p-2 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-600 group'>
                            <IoSearchOutline className='text-[50px] text-gray-500 group-hover:text-white' />
                        </li>
                    </ul>
                </div>

                {/* product cards */}

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filter.map((product, index) => (
                        <div key={index} className='cursor-pointer mt-5'>
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
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Products
