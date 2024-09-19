import React from 'react';
import { partners } from '../../data';

const Partners = () => {
    return (
        <section className='py-8 bg-gray-200 dark:bg-gray-800'>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-8 md:gap-12">
                    {partners.map((item, index) => (
                        <div key={index} className='flex justify-center items-center'>
                        <div className='w-[80px] h-[80px] flex items-center justify-center'>
                            <img src={item.image} alt="Brand" className='w-full h-full object-contain' />
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Partners;
