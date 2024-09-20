import React from 'react';
import { partners } from '../../data';
import { motion } from 'framer-motion';

const Partners = () => {
    return (
        <section className='py-8 bg-brandLightBlue dark:bg-gray-800'>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-8 md:gap-12">
                    {partners.map((item, index) => (
                        <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} key={index} className='flex justify-center items-center'>
                            <div className='w-[120px] h-[100px] flex items-center justify-center'>
                                <img src={item.image} alt="Brand" className='w-full h-full object-contain filter-none dark:filter invert' />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Partners;
