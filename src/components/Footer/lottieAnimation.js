"use client"
import React, { useState, useEffect } from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const LottieAnimationFooter = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isVisible && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-light bg-opacity-75 z-50">
                    <DotLottiePlayer
                        src="/party.lottie"
                        autoplay
                    />
                </div>
            )}
        </>
    );
};

export default LottieAnimationFooter;