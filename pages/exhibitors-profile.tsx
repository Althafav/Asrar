import ImageSliderCompnent from '@/components/ImageSliderCompnent'
import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { ExhibitorProfile } from '@/constants/data';
import { Exhibitor } from '@/models/exhibitor';
import { Exhibitoritem } from '@/models/exhibitoritem';
import Globals from '@/modules/Globals';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function ExhibitorProfilePage() {

    const [pageData, setPageData] = useState<Exhibitor | null>(null);


    useEffect(() => {
        Globals.KontentClient.item("our_exhibitors")
            .toObservable()
            .subscribe((response: any) => {

                setPageData(response.item);
            });

    }, []);



    if (!pageData) {
        return <SpinnerComponent />;
    }
    return (
        <div className='exhibitors-page-wrapper margin_top'>
            <Head>
                <title>{`${Globals.SITE_NAME} | Exhibitor Profile`}</title>

            </Head>

            <div className="exhibitor-profile-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='section-heading text-gradient text-center '>Exhibitor Profiles</h2>
                        </div>
                    </div>
                    <div className="profile-card-container mt-lg-5 mt-3">

                        {ExhibitorProfile.map((profile: any, index: any) => {
                            return (
                                <div className="profile-card" key={`exhibitor-profile-${index}`}>

                                    <img src={profile.cardImage} alt={profile.name} className='profile-card-image' />
                                    <div className="content-wrap">
                                        <div className="name">
                                            {profile.name}
                                        </div>

                                        <Link href={`/exhibitor-profile/${profile.slug}`} className='d-flex justify-content-end align-items-center gap-2 mt-3'>
                                            <span className='learn-more'>Learn More</span>
                                            <img src="/assets/icons/Arrow 1.png" alt="arrow" className='arrow-icon' />
                                        </Link>

                                    </div>

                                </div>
                            )
                        })}

                    </div>

                </div>
            </div>


        </div>
    )
}
