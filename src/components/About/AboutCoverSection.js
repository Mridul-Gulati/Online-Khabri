import React from 'react'
import Image from 'next/image'
import profileCharacter from '../../../public/Profile-OnlineKhabri.png'

const AboutCoverSection = () => {
    return (
        <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
            <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'>
                <Image
                    src={profileCharacter}
                    alt='Online Khabri'
                    className='h-full w-4/5 xs:w-3/4 md:w-full object-contain object-center'
                    sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
                    priority
                />
            </div>
            <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center pb-10 px-5 xs:p-10 lg:px-16'>
                <h2 className='hidden md:block mt-5 sm:mt-0 font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl text-center lg:text-left'>
                    News, Insight, Impact
                </h2>
                <p className='mt-10 font-medium capitalize lg:mt-4 text-sm pb-4 lg:text-base'>
                    Welcome to OnlineKhabri, your premier destination for the latest in national and international news, sports, entertainment, weather, science and technology, and finance. Our blog ensures comprehensive coverage with timely updates and in-depth analysis to keep you informed on all fronts. Designed for easy navigation, OnlineKhabri provides a user-friendly experience with a commitment to journalistic integrity. Engage with our content and join discussions that matter. Whether it&apos;s breaking news or detailed forecasts, stay ahead with OnlineKhabri—where news meets insight.
                </p>
            </div>
        </section>
    )
}

export default AboutCoverSection