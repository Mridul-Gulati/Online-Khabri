import React from 'react'
import { sortBlogs } from '@/src/utils'
import Link from 'next/link'
import BlogLayoutThree from '../Blog/BlogLayout3'

const RecentPosts = ({ blogs }) => {
    const sortedBlogs = sortBlogs(blogs)
    return (
        <section className='w-full sm:px-10 px-5 md:px-24 mt-16 sm:mt-24 md:mt-32 sxl:px-32 flex flex-col items-center justify-center'>
            <div className='flex w-full justify-between'>
                <h2 className='w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light'>Recent Posts</h2>
                <Link href='/categories/all' className='inline-block text-accent dark:text-accentDark font-medium underline underline-offset-2 text-base md:text-lg'> view all </Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-16'>
                {
                    sortedBlogs.slice(4, 10).map((blog, index) => {
                        return (
                            <article key={index} className='col-span-1 row-span-1 relative'>
                                <BlogLayoutThree blog={blog} />
                            </article>
                        )
                    })
                }
            </div>
            <div class='onesignal-customlink-container'></div>
        </section>
    )
}

export default RecentPosts
