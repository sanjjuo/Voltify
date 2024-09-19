import React from 'react';
import Slider from "react-slick";
import { slider } from '../../data';

const Header = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 4000,
        autoplaySpeed: 3000,
    };
    return (
        <>
            <div className="w-full bg-brandWhite dark:bg-gray-900 dark:text-white hidden lg:block">
                <Slider {...settings}>
                    {slider.map((item, index) => (
                        <>
                            <div className="flex justify-evenly items-center p-[60px]" key={index}>
                                <div className='flex flex-col justify-center  w-[650px]'>
                                    <h4 className='font-extrabold text-xl'>{item.subTitle}</h4>
                                    <h1 className='text-[80px] font-[900] drop-shadow-[-8px_4px_6px_rgba(0,0,0,.8)]'>{item.title}</h1>
                                    <button type="button" className='!bg-primary w-[40%]
                                     text-white rounded-3xl p-3 mt-3 hover:!bg-gray-900 hover:text-black dark:hover:!bg-gray-500'>
                                        Shop by category
                                    </button>
                                </div>
                                <div className="w-[500px] h-[500px]">
                                    <img src={item.image} alt="" className='w-[100%] h-[100%] object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.8)]' />
                                </div>
                            </div>
                        </>
                    ))}
                </Slider>
            </div>

            {/* mobile device */}

            <section className='w-full dark:bg-gray-900 dark:text-white block lg:hidden'>
                <Slider {...settings}>
                    {
                        slider.map((item, index) => (
                            <div className='relative w-[100%] h-[400px]' key={index}>
                                <img src={item.image} alt="" className='w-[100%] h-[100%] opacity-80' />
                                <div className='absolute top-[40%] left-[6%] right-1'>
                                    <h3 className='font-extrabold text-xl'>{item.subTitle}</h3>
                                    <h1 className='text-[45px] font-[900] drop-shadow-[-8px_4px_6px_rgba(0,0,0,.8)]'>{item.title}</h1>
                                    <button type="button" className='!bg-primary w-[60%]
                                     text-white rounded-3xl p-2 mt-3 hover:!bg-gray-900 hover:text-black dark:hover:!bg-gray-500'>
                                        Shop by category
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </section>
        </>
    )
}

export default Header
