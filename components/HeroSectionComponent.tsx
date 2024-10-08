"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiFillShop } from 'react-icons/ai'
import { FaGlobe, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Buttons } from '@/models/buttons';

export default function HeroSectionComponent(props: any) {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const sineWave = {
        hidden: { y: 0 },
        visible: {
            y: [0, -10, 0, 10, 0],  // Creates the oscillating effect
            transition: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
            }
        }
    };


    useEffect(() => {
        const targetDate = new Date('2024-11-28T00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const timeRemaining = targetDate - now;

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            if (timeRemaining < 0) {
                clearInterval(interval);
            } else {
                setCountdown({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='hero-section-component-wrapper'
            style={{
                backgroundImage: "url('/assets/imgs/HERO IMAGE.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            <div className="container">
                <h2 className='hero-main-heading '>
                    Unveiling Beauty and Fashion&apos;s Future
                </h2>
                <div>
                    <p className='date-venu'>20 - 24 May 2025 | Saraj Venue</p>
                </div>
            </div>
        </div>
    )
}
