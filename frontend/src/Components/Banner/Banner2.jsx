import React from 'react'
import { motion } from 'framer-motion'

const Banner2 = () => {
    return (
        <>
            <div className='py-8 dark:bg-gray-900'>
                <div className="container">
                    <div className='!bg-brandGreen flex flex-col justify-between items-center gap-4 lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-4 rounded-3xl p-4 lg:h-[280px] cursor-pointer group 
                    transition-all duration-300 ease-in-out transform scale-100 hover:scale-105'>
                        <div className='w-full'>
                            <h6 className='text-white font-medium text-xl'>35% off</h6>
                            <h1 className='text-white font-extrabold text-[70px]'>Fine smile</h1>
                            <p className='text-white font-thin text-md'>19 jun to 25 july</p>
                        </div>
                        <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className='w-[100%] h-[280px]'>
                            <img src="virtual.png" alt="" className='w-[100%] h-[100%] object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.8)]
                             transition-all duration-500 ease-in-out transform scale-100 group-hover:scale-110' />
                        </motion.div>
                        <div className='w-full'>
                            <h6 className='text-white font-medium text-xl'>Air solo beans</h6>
                            <h1 className='text-white font-extrabold text-[70px]'>Winter sale</h1>
                            <p className='text-white font-thin text-md'>lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum</p>
                            <button className='bg-white !text-brandGreen w-[30%] rounded-3xl p-2 text-xl hover:!bg-gray-900 hover:!text-white'>Shop</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner2
