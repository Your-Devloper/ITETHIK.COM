import React from 'react'
import { Separator } from './ui/separator'

const Stats = () => {
    return (
        <div className='border-t border-b border-gray-200 h-36 flex items-center'>

            {/* REVIEWS */}
            <div className='h-full w-1/3 bg-[#abe9ff] flex items-center justify-center gap-10'>
                {/* Just Dial */}
                <a href='https://www.justdial.com/Mumbai/Itethik-Near-Radcliffe-School-Ulwe/022PXX22-XX22-190416133035-B6N6_BZDET' target='_blank'>
                    <div className='h-18 w-38 border-2 flex flex-col items-center justify-center bg-white rounded-md border-none px-8'>
                        <img src='/justdial.png' />
                        <div className='flex h-6'>
                            <img src='/five-stars.png' className='mt-1 h-5'/>
                            {/* <p>5.0 / 5.0</p> */}
                        </div>
                    </div>
                </a>

                {/* google reviews */}
                <a href='https://goo.gl/maps/jjK3LvA1LwoZFWHX6?coh=178572' target='_blank'>
                    <div className='h-18 w-38 border-2 flex flex-col items-center justify-center bg-white rounded-md border-none px-8'>
                        <img src='/google.png' className='h-6'/>
                        <div className='flex h-6'>
                            <img src='/five-stars.png' className='mt-0.5 h-5'/>
                            {/* <p>5.0 / 5.0</p> */}
                        </div>
                    </div>
                </a>
            </div>

            <div className='h-full w-2/3 flex items-center justify-around py-10 px-4'>
                <div>
                    <h2 className='text-2xl font-bold'>1200+</h2>
                    <p className='text-gray-600'>Projects Completed</p>
                </div>
                <Separator orientation="vertical" />

                <div>
                    <h2 className='text-2xl font-bold'>5 Years</h2>
                    <p className='text-gray-600'>Working With Passion</p>
                </div>
                <Separator orientation="vertical" />

                <div>
                    <h2 className='text-2xl font-bold'>5 Years</h2>
                    <p className='text-gray-600'>Working With Passion</p>
                </div>
                <Separator orientation="vertical" />

                <div>
                    <h2 className='text-2xl font-bold'>5 Years</h2>
                    <p className='text-gray-600'>Working With Passion</p>
                </div>
            </div>
        </div>
    )
}

export default Stats