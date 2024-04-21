import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profileImg from '@/public/logo.png'
const Logo = () => {
    return (
        <Link href="/" className='flex items-center text-dark dark:text-light'>
            <div className='w-12 md:w-16 rounded-full mr-2 md:mr-4 overflow-hidden border border-solid border-dark dark:border-gray'>
                <Image src={profileImg} alt="Logo" className='w-full h-auto rounded-full' sizes="33vw" priority />
            </div>
            <span className='font-bold dark:font-semibold text-lg md:text-xl'>Online Khabri</span>
        </Link>
    )
}

export default Logo
