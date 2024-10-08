import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { About } from '@/models/about';
import Globals from '@/modules/Globals'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

export default function AboutPage() {

    const [pageData, setPageData] = useState<About | null>(null);


    useEffect(() => {
        Globals.KontentClient.item("about_us_page")
            .toObservable()
            .subscribe((response: any) => {

                setPageData(response.item);
            });

    }, []);



    if (!pageData) {
        return <SpinnerComponent />;
    }
    return (
        <div className=' about-page-wrapper'>
            <Head>
                <title>{`${Globals.SITE_NAME} | About`}</title>
                <meta name="title" content={`${Globals.SITE_NAME} | About `} />
                <meta name="description" content={`${Globals.SITE_NAME} | The International Glass Show (IGS) stands as the premier event in Africa and the Middle East dedicated to the entire glass industry and its value chain.`} />
            </Head>
            <div className="container">
                <div className="video-container-wrapper">
                   <img src="/assets/imgs/b1.jpeg" alt="" className='about-image'/>
                </div>

                <section>
                    <div className="row">
                        <div className="col-12">
                            <p className='main-desc' dangerouslySetInnerHTML={{ __html: pageData.content1.value }}></p>
                        </div>
                    </div>
                </section>
            </div>


            <section className='vision-section'>
                <div className="container vision-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='vision-label'>
                                Vision
                            </div>

                            <h1 className='section-heading'>
                                International Glass Show (IGS)
                            </h1>
                        </div>

                        <div className="col-lg-6">
                            <p className='description' dangerouslySetInnerHTML={{ __html: pageData.image1content.value }}></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
