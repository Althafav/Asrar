import Globals from '@/modules/Globals'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { IoChevronDownOutline, IoChevronUpOutline, IoMenuSharp } from 'react-icons/io5'

export default function MenuComponent() {
    const [isToggle, setIsToggle] = useState(false);
    const [isExhibitorDropdown, setIsExhibitorDropdown] = useState(false);
    const [isVisitorDropdown, setIsVisitorDropdown] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    const handleToggle = () => {
        setIsToggle(prevState => !prevState);
    };
    const handleExhibitorDropdown = () => {
        setIsExhibitorDropdown(prevState => !prevState);
    };

    const handleVisitorDropdown = () => {
        setIsVisitorDropdown(prevState => !prevState);
    };


    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`menu-component-wrapper ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container menu-container">
                <div className='d-flex align-items-center justify-content-between'>
                    <Link href={`${Globals.BASE_URL}`} className="logo-wrapper">
                        <img src={`/assets/logos/asrar_logo.png`} alt="Logo"
                            className='menu-logo white-logo' />

                    </Link>

                    <ul className=' gap-3 menu-items text-gradient d-lg-flex d-none'>
                        <li className='menu-item'>
                            <Link href="/about">
                                About Us
                            </Link>
                        </li>
                        <li className='menu-item'>
                            <Link href="/#Workshops">
                                Workshops
                            </Link>
                        </li>
                        <li className='menu-item'>
                            <Link href="/why-exhibit">
                                Why Exhibit
                            </Link>
                        </li>
                        <li className='menu-item'>
                            <Link href="/exhibitors-profile">
                                Exhibitor Profile
                            </Link>
                        </li>
                    </ul>

                    <div className='d-flex align-items-center gap-lg-5 gap-3'>

                        <Link href="/book-your-stand">
                            <img src="/assets/imgs/ASRAR_BOOK YOUR STAND.png" alt="" className='book-stand-btn-image' />
                        </Link>


                        <div className="menu-icon-wrapper  d-lg-none d-flex align-items-center gap-2" onClick={handleToggle}>
                            {isToggle ? (
                                <IoMdClose size={32} color='white' cursor="pointer" className='menu-icon' />
                            ) :
                                (
                                    <IoMenuSharp size={32} color='white' cursor="pointer" className='menu-icon' />

                                )
                            }

                        </div>
                    </div>
                </div>
                {isToggle && (
                    <div className='mobile-menu-items-wrapper'>
                        <ul className='menu-items-container'>
                            <li className='menu-item'>
                                <Link href="/about"  onClick={handleToggle}>
                                    About Us
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <Link href="#Workshops" onClick={handleToggle}>
                                    Workshops
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <Link href="/why-exhibit" onClick={handleToggle}>
                                    Why Exhibit
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <Link href="/exhibitors-profile" onClick={handleToggle}>
                                    Exhibitor Profile
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}


            </div>



        </div>
    )
}
