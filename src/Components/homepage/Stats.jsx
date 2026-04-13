import React from 'react';

const Stats = () => {
    return (
        <div className='bg-purple-500'>
            <div className='container mx-auto  py-10 space-y-10'>
                <h2 className='text-4xl font-bold text-center text-white'>Trusted by Millions, Built for You</h2>
                <div className='grid text-center md:grid-cols-3 items-center gap-4 text-white'>
                    <div className='space-y-2'>
                        <p>Total Downloads</p>
                        <h1 className='text-5xl font-bold '>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className='space-y-2'>
                        <p>Total Reviews</p>
                        <h1 className='text-5xl font-bold '>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className='space-y-2'>
                        <p>Active Apps</p>
                        <h1 className='text-5xl font-bold '>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;