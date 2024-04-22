import React from 'react'
import { sortBlogs } from '../../utils'
import Image from 'next/image'
import Link from 'next/link'
import Tag from '../Elements/Tag'
import { slug } from 'github-slugger'
import InsightRoll from '../About/InsightRoll'
const HomeCoverSection = ({ blogs }) => {

    const sortedBlogs = sortBlogs(blogs)
    const blog = sortedBlogs[6]
    return (
        <div className='w-full inline-block'>
            <InsightRoll insights={["🎉 Subscribe to our FREE Weekly Newsletter to stay updated with the latest trends and news! 🎉"]} />
            <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]'>
                <div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0' />
                <Image src={blog.image.filePath.replace("../public", "")} alt={blog.title} placeholder='blur' blurDataURL={blog.image.blurhashDataUrl} fill className='w-full h-full object-center object-cover rounded-3xl -z-10' sizes="100vw" priority />
                <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light'>
                    <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} />
                    <Link href={blog.url_path} className='mt-6'>
                        <h1 className='font-bold capitalize text-light text-lg sm:text-xl md:text-3xl lg:text-4xl'>
                            <span className='bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] dark:from-accentDark/50 dark:to-accentDark/50 hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>{blog.title}</span>
                        </h1>
                    </Link>
                    <p className='hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-in'>
                        {blog.description}
                    </p>
                </div>
            </article>
        </div>
    )
}

export default HomeCoverSection
