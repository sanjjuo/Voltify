import React from 'react'
import { news } from '../../data';

const News = () => {
    return (
        <section className='py-20 dark:bg-gray-900 dark:text-white'>
            <h1 className='text-center font-extrabold'>Recent News</h1>
            <p className='text-center font-light text-gray-400'>Explore our blogs</p>
            <div className="container">
                <div className='grid gap-2 grid-cols-1 md:grid col-span-3 lg:grid-cols-3'>
                    {news.map((item, index) => (
                        <div className='mt-5' key={index}>
                            <div className='w-full h-[320px] group overflow-hidden rounded-3xl cursor-pointer'>
                                <img src={item.image} alt={item.title} className='w-full h-full transition duration-1000 ease-out transform scale-100 group-hover:scale-110' />
                            </div>
                            <div className='text-center p-2'>
                                <h3 className='text-gray-700 font-normal text-xl lg:text-2xl'>{item.title}</h3>
                                <p className='text-gray-500 text-justify font-light'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default News
