import React from 'react';

const Category = () => {
    return (
        <div className="py-8 dark:bg-gray-900">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">

                    {/* First Card */}
                    <div className="bg-gradient-to-br from-black/90 to-black/70 rounded-3xl h-[320px] cursor-pointer 
                    transition-transform duration-500 ease-out transform scale-100 hover:scale-105 dark:bg-dark-900">
                        <div className="relative w-full h-full">
                            <img
                                src="/earphone.png"
                                alt="headphone"
                                className="w-full h-full object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.8)]"
                            />
                            <div className="absolute top-[30%] left-3 z-10">
                                <h4 className="text-sm text-gray-300 capitalize">enjoy</h4>
                                <h1 className="text-5xl text-white font-extrabold capitalize">headphone</h1>
                                <button className="!bg-primary text-white text-sm p-2 w-[50%] rounded-3xl mt-3
                                hover:!bg-gray-900 hover:!text-primary">Browse</button>
                            </div>
                        </div>

                    </div>

                    {/* Second Card */}
                    <div className="bg-gradient-to-br from-brandYellow/90 to-brandYellow/70 rounded-3xl h-[320px] cursor-pointer 
                    transition-transform duration-500 ease-out transform scale-100 hover:scale-105">
                        <div className="relative w-full h-full">
                            <img
                                src="/smartwatch.png"
                                alt="smartwatch"
                                className="w-full h-full object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.8)]"
                            />
                            <div className="absolute top-[30%] left-3 z-10">
                                <h4 className="text-sm text-gray-300 capitalize">enjoy</h4>
                                <h1 className="text-5xl text-white font-extrabold capitalize">smartwatch</h1>
                                <button className="bg-white text-brandYellow text-sm p-2 w-[50%] rounded-3xl mt-3
                                hover:bg-brandYellow hover:text-white">Browse</button>
                            </div>
                        </div>
                    </div>

                    {/* Third Card - Spanning 2 columns */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-primary/90 to-primary/70 rounded-3xl h-[320px] cursor-pointer 
                    transition-transform duration-500 ease-out transform scale-100 hover:scale-105">
                        <div className="relative w-full h-full">
                            <img
                                src="/laptop.png"
                                alt="laptop"
                                className="w-full h-full object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.8)]"
                            />
                            <div className="absolute top-[30%] left-3 z-10">
                                <h4 className="text-sm text-gray-300 capitalize">enjoy</h4>
                                <h1 className="text-5xl text-white font-extrabold capitalize">laptop</h1>
                                <button className="bg-white !text-primary text-sm p-2 w-[50%] rounded-3xl mt-3
                                hover:bg-primary hover:text-white">Browse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
