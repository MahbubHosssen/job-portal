import React from 'react';
import { FaBullhorn } from 'react-icons/fa';

const Category = () => {
    return (
        <div className='my-8'>
            <div className='text-center'>
                <h1 className='text-2xl font-medium'>Browse By Category</h1>
                <p>Find the job that’s perfect for you. about 800+ new jobs everyday</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8'>

                <div className='border rounded-lg p-6 flex gap-4 items-center hover:border-blue-400 hover:mt-[-8px] transition-all'>
                    <FaBullhorn className='text-3xl text-blue-400' />
                    <div>
                        <h4 className='text-lg font-medium'>Marketing and Sale</h4>
                        <p className='text-left'>1526 Jobs Available</p>
                    </div>
                </div>
                <div className='border rounded-lg p-6 flex gap-4 items-center hover:border-blue-400 hover:mt-[-8px] transition-all'>
                    <FaBullhorn className='text-3xl text-blue-400' />
                    <div>
                        <h4 className='text-lg font-medium'>Marketing and Sale</h4>
                        <p className='text-left'>1526 Jobs Available</p>
                    </div>
                </div>
                <div className='border rounded-lg p-6 flex gap-4 items-center hover:border-blue-400 hover:mt-[-8px] transition-all'>
                    <FaBullhorn className='text-3xl text-blue-400' />
                    <div>
                        <h4 className='text-lg font-medium'>Marketing and Sale</h4>
                        <p className='text-left'>1526 Jobs Available</p>
                    </div>
                </div>
                <div className='border rounded-lg p-6 flex gap-4 items-center hover:border-blue-400 hover:mt-[-8px] transition-all'>
                    <FaBullhorn className='text-3xl text-blue-400' />
                    <div>
                        <h4 className='text-lg font-medium'>Marketing and Sale</h4>
                        <p className='text-left'>1526 Jobs Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;