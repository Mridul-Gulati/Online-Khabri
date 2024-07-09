import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Tag from '../Elements/Tag'
import { slug } from 'github-slugger'
const BlogLayoutOne = ({ blog }) => {
    return (
        <div className='group relative inline-block overflow-hidden rounded-xl w-full h-[300px] sm:h-[400px]'>
            <div className='absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10' />
            <Image
                src={blog.image.filePath.replace("../public", "")}
                alt={blog.title}
                placeholder='blur'
                blurDataURL={blog.image.blurhashDataUrl}
                layout="fill"
                objectFit="cover"
                className='rounded-xl group-hover:scale-105 transition-all ease duration-300'
                sizes="(max-width: 1180px) 100vw, 50vw"
            />
            <div className='absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20 w-full'>
                <Tag
                    className="px-6 text-xs sm:text-sm py-1 sm:py-2 !border"
                    link={`/categories/${slug(blog.tags[0])}`}
                    name={blog.tags[0]}
                />
                <Link href={blog.url_path} className='mt-6 block'>
                    <h2 className='font-bold capitalize text-light text-sm xs:text-base sm:text-xl md:text-2xl mt-2 sm:mt-4'>
                        <span className='bg-gradient-to-r from-accent dark:from-accentDark to-accent dark:to-accentDark bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                            {blog.title}
                        </span>
                    </h2>
                </Link>
            </div>
        </div>
    )
}

export default BlogLayoutOne
