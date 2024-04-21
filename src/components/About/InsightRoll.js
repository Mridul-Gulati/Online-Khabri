"use client"
import React from 'react'


const InsightRoll = ({ insights }) => {
    const scrollToFooter = () => {
        const footer = document.getElementById('footer'); // Assuming the footer has an id of 'footer'
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' }); // Scroll to the footer smoothly
        }
    };

    return (
        <div className='my-2 w-full bg-accent dark:bg-accentDark text-light dark:text-dark whitespace-nowrap overflow-hidden justify-center'>
            <div className='animate-roll sm:animate-none w-full py-2 sm:py-3 flex items-center justify-center capitalize font-semibold dark:font-bold tracking-wider text-xs sm:text-sm md:text-base'>
                {
                    insights.map((insight, index) => {
                        return (
                            <a key={index} href='#footer' className='hover:underline px-0 md:px-3' onClick={scrollToFooter}>
                                {insight}
                            </a>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default InsightRoll;
