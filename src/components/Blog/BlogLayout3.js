import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'

const BlogLayoutThree = ({ blog }) => {
    return (
        <div className='group flex flex-col items-center text-dark dark:text-light'>
            <Link href={blog.url_path} className="h-full rounded-xl overflow-hidden">
                <Image src={blog.image.filePath.replace("../public", "")} alt={blog.title} placeholder='blur' blurDataURL={blog.image.blurhashDataUrl} height={blog.image.height} width={blog.image.width} className='cursor-pointer aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300' />

            </Link>
            <div className='flex flex-col mt-4 w-full '>
                <span className='uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm'>{blog.tags[0]}</span>
                <Link href={blog.url_path} className='inline-block my-1'>
                    <h2 className='font-semibold capitalize text-base sm:text-lg'>
                        <span className='bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>{blog.title}</span>
                    </h2>
                </Link>
                <span className='capitalize text-dark/50 dark:text-light/50 font-semibold text-sm sm:text-base'>
                    {format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}
                </span>
            </div>

        </div>
    )
}

export default BlogLayoutThree
