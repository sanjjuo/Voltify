import React from 'react';
import { BsTruck } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <div className='py-8 dark:bg-gray-900'>
            <div className="container">
                <ul className='lg:flex items-center justify-between p-0 m-0'>
                    <motion.li initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className='flex flex-col justify-center items-center cursor-pointer group'><div className='bg-brandWhite rounded-full w-[120px] h-[120px]  p-3 
                    flex justify-center items-center transition-all duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[-20px] mb-3 shadow-md'>
                        <BsTruck className='text-[60px] !text-primary' /></div>
                        <span className='font-bold text-2xl text-gray-600'>Free Shipping</span><p className='text-gray-400 text-sm font-light'>Free shipping at anywhere anytime</p>
                    </motion.li>
                    <motion.li initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className='flex flex-col justify-center items-center cursor-pointer group'><div className='bg-brandWhite rounded-full w-[120px] h-[120px]  p-3 
                    flex justify-center items-center transition-all duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[-20px] mb-3 shadow-md'>
                        <MdDone className='text-[60px] !text-primary' /></div>
                        <span className='font-bold text-2xl text-gray-600'>Safe Money</span><p className='text-gray-400 text-sm font-light'>90 Days money back</p>
                    </motion.li>
                    <motion.li initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className='flex flex-col justify-center items-center cursor-pointer group'><div className='bg-brandWhite rounded-full w-[120px] h-[120px]  p-3 
                    flex justify-center items-center transition-all duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[-20px] mb-3 shadow-md'>
                        <FaHeadphonesSimple className='text-[60px] !text-primary' /></div>
                        <span className='font-bold text-2xl text-gray-600'>Online Support 24/7</span><p className='text-gray-400 text-sm font-light'>Technical support 24/7</p>
                    </motion.li>
                    <motion.li initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className='flex flex-col justify-center items-center cursor-pointer group'><div className='bg-brandWhite rounded-full w-[120px] h-[120px]  p-3 
                    flex justify-center items-center transition-all duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[-20px] mb-3 shadow-md'>
                        <MdPayment className='text-[60px] !text-primary' /></div>
                        <span className='font-bold text-2xl text-gray-600'>Free Shipping</span><p className='text-gray-400 text-sm font-light'>All payments are secure</p>
                    </motion.li>
                </ul >
            </div >
        </div >
    )
}

export default Services
