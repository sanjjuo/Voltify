import React from 'react'
import { motion } from "framer-motion"

const Category2 = () => {
    return (
        <div className='pb-8 dark:bg-gray-900'>
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>

                    {/* first-card */}
                    <motion.div initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='lg:col-span-2 bg-gradient-to-br from-brandWhite/90 to-brandWhite/70 rounded-3xl h-[320px] cursor-pointer 
                    transition-transform duration-500 ease-out transform scale-100 hover:scale-105'>
                        <div className='relative w-full h-full'>
                            <img src="/ps5.png" alt="" className='w-[100%] h-[100%] object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.8)]' />
                            <div className="absolute top-[30%] left-3 right-0 z-10">
                                <h4 className='text-sm text-gray-400 capitalize'>enjoy</h4>
                                <h1 className='text-5xl text-gray-700 font-extrabold capitalize'>PS5</h1>
                                <button className='bg-white text-gray-700 text-sm p-2 w-[20%] rounded-3xl mt-3
                                 hover:!bg-gray-700 hover:text-white'>Browse</button>
                            </div>
                        </div>
                    </motion.div>

                    {/* second card */}
                    <motion.div initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className='bg-gradient-to-br from-brandVR/90 to-brandVR/70 rounded-3xl h-[320px]  cursor-pointer 
                    transition-transform duration-500 ease-out transform scale-100 hover:scale-105'>
                        <div className='relative w-full h-full'>
                            <img src="/virtual.png" alt="" className='w-[100%] h-[100%] object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.8)]' />
                            <div className="absolute top-[30%] left-3 right-0 z-10">
                                <h4 className='text-sm text-gray-300 capitalize'>enjoy</h4>
                                <h1 className='text-5xl text-white font-extrabold capitalize'>VR</h1>
                                <button className='bg-white text-brandGreen text-sm p-2 w-[40%] rounded-3xl mt-3
                                 hover:!bg-brandGreen hover:text-white'>Browse</button>
                            </div>
                        </div>
                    </motion.div>

                    {/* third-card */}
                    <motion.div initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className='bg-gradient-to-br from-brandSpeaker/90 to-brandSpeaker/70 rounded-3xl h-[320px] cursor-pointer 
                    transition-transform duration-500 ease-out transform scale-100 hover:scale-105'>
                        <div className='relative w-full h-full'>
                            <img
                                src="/speaker.png"
                                alt=""
                                className='w-[100%] h-[100%] object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.8)]'
                            />
                            <div className="absolute top-[30%] left-3 right-0 z-10">
                                <h4 className='text-sm text-gray-300 capitalize'>enjoy</h4>
                                <h1 className='text-3xl text-white font-extrabold capitalize'>Speakers</h1>
                                <button className='!bg-white text-brandBlue text-sm p-2 w-[40%] rounded-3xl mt-3
                                 hover:!bg-brandBlue hover:text-white'>Browse</button>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Category2
