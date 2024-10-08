import { Footer } from '@/models/footer';
import Globals from '@/modules/Globals';

import Link from 'next/link';
import React from 'react'
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2';

export default function FooterComponent() {
    const [sectionData, setSectionData] = React.useState(new Footer());
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        const subscription = Globals.KontentClient.item("footer")
            .toObservable()
            .subscribe((response: any) => {
                setSectionData(response.item);
                setIsLoaded(true);


            });

        return () => subscription.unsubscribe();

    })

    if (!isLoaded) {
        return <React.Fragment />
    }


    return (
        <>
            <section>
                <hr />
            </section>
            <div className='footer-component-wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <Link href="/contact">
                                <h3 className='section-heading mb-4 d-flex align-items-start gap-2'>Contact us <HiMiniArrowTopRightOnSquare color='white' size={32} /></h3>

                            </Link>
                            <p className='address-desc mb-4'>Office no 909, Al-Rossais Commercial Center, 3857 Olaya St, Riyadh 6468, Riyadh 12211
                            </p>
                            <p className='phone'>{sectionData.phone.value}</p>
                        </div>
                        <div className="col-lg-2 d-flex justify-content-lg-center">
                            <ul className='quicklink-items'>
                                <li className='footer-head mb-3'>Quick Links</li>

                                <Link href="/#AboutUs" >
                                    <li className='menu-item'>About Us</li>

                                </Link>


                                <Link href="/" >
                                    <li className='menu-item'>Workshops</li>

                                </Link>

                                <Link href="/" >
                                    <li className='menu-item'>Why Exhibit</li>

                                </Link>

                                <Link href="/exhibitors-profile" >
                                    <li className='menu-item'>Exhibitors Profile</li>

                                </Link>


                            </ul>
                        </div>
                        <div className="col-lg-5 d-flex justify-content-lg-end">

                            <ul>
                                <li className='footer-head mb-3'>Follow Us</li>

                                <li className='menu-item mb-3'>
                                    <div className='d-flex gap-2'>
                                        <Link href="https://www.facebook.com/Int.GlassShow" target='_blank'>
                                        {/* x */}
                                            <img src="/assets/icons/social media Icons-05.svg" alt="" className='social-icons' />

                                        </Link>

                                        <Link href="https://x.com/Int_glass_show" target='_blank'>
                                            <img src="/assets/icons/social media Icons-06.svg" alt="" className='social-icons' />

                                        </Link>

                                        <Link href="https://www.linkedin.com/company/international-glass-show/" target='_blank'>
                                            <img src="/assets/icons/social media Icons-07.svg" alt="" className='social-icons' />

                                        </Link>
                                        <Link href="https://www.instagram.com/theinternationalglassshow/" target='_blank'>
                                            <img src="/assets/icons/social media Icons-08.svg" alt="" className='social-icons' />

                                        </Link>
                                    </div>
                                </li>


                                <li className='footer-head mb-3'>Brought to You By</li>
                                <li>
                                    <img src="/assets/logos/strategic-logo.png" alt="" className='strategic-logo' />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className='mt-5 mb-3' />
                    <p className='copy-right text-lg-center'>© Copyright Strategic Exhibitions & Conferences</p>
                </div>
            </div>

        </>

    )
}
