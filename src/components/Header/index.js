"use client"
import React, { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { TwitterIcon, InstagramIcon, ThreadsIcon, YouTubeIcon, SunIcon, MoonIcon, GlobeIcon } from '../Icons'
import siteMetadata from '@/src/utils/SiteMetadata'
import { useThemeSwitch } from '../Hooks/useThemeSwitch'
import { cx } from '@/src/utils'

const Header = () => {
    const [mode, setMode] = useThemeSwitch();
    const [click, setClick] = useState(false);
    const toggle = () => {
        setClick(!click)
    }

    return (
        <header className='w-full p-4 px-5 sm:px-10 flex items-center justify-between'>
            <Logo />

            <button className="inline-block sm:hidden z-50" onClick={toggle} aria-label="Hamburger Menu">
                <div className="w-6 cursor-pointer transition-all ease duration-300">
                    <div className="relative">
                        <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                            style={{
                                transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
                            }}

                        >&nbsp;</span>
                        <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                            style={{
                                opacity: click ? 0 : 1
                            }}
                        >&nbsp;</span>
                        <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                            style={{
                                transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
                            }}
                        >&nbsp;</span>
                    </div>

                </div>
            </button>

            <nav className='w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize flex sm:hidden items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 transition-all ease duration-300'
                style={{
                    top: click ? "1rem" : "-5rem"
                }}
            >
                <Link href='/' className='mr-3'>Home</Link>
                <Link href='/about' className='mx-2'>About</Link>
                <Link href='/contact' className='mx-2'>Contact</Link>
                <button className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" : "bg-light text-dark")} onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                    {
                        mode === "light" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-light"} />
                    }
                </button>
            </nav>

            <nav className='w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize hidden sm:flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50'>
                <Link href='/' className='mr-3'>Home</Link>
                <Link href='/about' className='mx-2'>About</Link>
                <Link href='/contact' className='mx-2'>Contact</Link>
                <Link href='/categories/all' className='mx-2'>Categories</Link>
                <button className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" : "bg-light text-dark")} onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                    {
                        mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-light"} />
                    }
                </button>
            </nav>

            <div className='sm:inline-block hidden'>
                <a href={siteMetadata.instagram} className='sm:inline-block w-6 h-6 mr-6 dark:text-light hidden'><InstagramIcon className="hover:scale-125 transition-all ease duration-200" /></a>
                <a href={siteMetadata.threads} className='sm:inline-block w-6 h-6 mr-5 dark:text-light hidden'><ThreadsIcon className="hover:scale-125 transition-all ease duration-200" /></a>
                <a href={siteMetadata.twitter} className='sm:inline-block w-6 h-6 mr-4 dark:text-light hidden'><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>
                <a href={siteMetadata.youtube} className='sm:inline-block mb-0.5 h-8 mr-4 text-light hidden'><YouTubeIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            </div>
        </header>
    )
}

export default Header
