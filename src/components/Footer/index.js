"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import { InstagramIcon, ThreadsIcon, TwitterIcon, YouTubeIcon2 } from '../Icons'
import dynamic from 'next/dynamic';
import siteMetadata from '@/src/utils/SiteMetadata';

const LottieAnimationFooter = dynamic(() => import('./lottieAnimation'), {
    ssr: false,
});

const Footer = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [loading, setLoading] = useState(false); // State to handle loading status

    function submitHandler(data) {
        setLoading(true);
        fetch("/api/sheet", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    // Success: animate the lottie
                    triggerAnimation();
                    reset();
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function triggerAnimation() {
        setSubmissionSuccess(false); // Ensure the component is reset
        setTimeout(() => {
            setSubmissionSuccess(true);
        }, 10); // A short delay to re-trigger the animation
    }


    return (
        <footer id="footer" className='mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark'>
            <h3 className='mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4'>
                Interesting Stories | News | Updates
            </h3>
            <p className='mt-5 dark:font-semibold px-4 text-center w-full sm:w-3/5 font-light text-sm sm:text-base'>
                Subscribe to learn about what's new around. Join over 5000+ members community to stay up to date with latest news.

            </p>
            <form className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx-4" onSubmit={handleSubmit(submitHandler)}>
                <input type="email" placeholder="Enter your Email" {...register("Email", { required: true })} className='pl-2 sm:pl-0 w-full bg-transparent text-dark dark:text-light focus:border-dark dark:focus:border-light  focus:ring-0 border-0 border-b mr-2 pb-1' />
                <button type="submit" className="bg-dark dark:bg-light text-light dark:text-dark cursor-pointer font-medium rounded px-3 sm:px-5 py-1" disabled={loading}>
                    {loading ? 'Processing...' : 'Submit'}
                </button>
                {/* <input className="bg-dark dark:bg-light text-light dark:text-dark cursor-pointer font-medium rounded px-3 sm:px-5 py-1" type="submit" /> */}
            </form>
            {submissionSuccess && (
                <div className="party-poppers">
                    <LottieAnimationFooter />
                </div>
            )}
            <div className='flex items-center mt-8'>
                <a href={siteMetadata.instagram} className='inline-block w-6 h-6 mr-6'><InstagramIcon className="hover:scale-125 transition-all ease duration-200" /></a>
                <a href={siteMetadata.threads} className='inline-block w-6 h-6 mr-5'><ThreadsIcon className="hover:scale-125 transition-all ease duration-200" /></a>
                <a href={siteMetadata.twitter} className='inline-block w-6 h-6 mr-4'><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>
                <a href={siteMetadata.youtube} className='inline-block mb-3 h-8 mr-4 fill-light dark:fill-none'><YouTubeIcon2 className="hover:scale-125 transition-all ease duration-200" /></a>
            </div>

            <div className='w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between'>
                <span className='text-center'>&copy;{new Date().getFullYear()} Online Khabri. All rights reserved.</span>
                <Link href='/sitemap.xml' className='text-center underline my-4 md:my-0'>
                    sitemap.xml
                </Link>
                <div className='text-center'>
                    Made with &hearts; by <a className='underline' href='https://github.com/Mridul-Gulati'>Mridul gulati</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
