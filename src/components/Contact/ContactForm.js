"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in dark:text-light'>
            Hello! my Name is: <input className='outline-none border-0 p-0 mx-2 focus:ring-0 focus:border-blue-400 placeholder:text-center placeholder:text-lg border-b border-gray dark:border-light bg-transparent' type="text" placeholder="your name" {...register("Name", { required: true })} />
            and I want to contribute to the blog. You can email me at: <input className='outline-none border-0 p-0 mx-2 focus:ring-0 focus:border-blue-400 placeholder:text-center placeholder:text-lg border-b border-gray bg-transparent' type="email" placeholder="your@email.com" {...register("Email", { required: true })} />
            or reach out to me via: <input className='outline-none border-0 p-0 mx-2 focus:ring-0 focus:border-blue-400 placeholder:text-center placeholder:text-lg border-b border-gray dark:border-light bg-transparent' type="tel" placeholder="your phone number" {...register("Phone Number", { required: true })} /> <br />

            <input className='mt-8 font-medium inline-block capitalize text-base xs:text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer' type="submit" value="send request" />
        </form>
    );
}