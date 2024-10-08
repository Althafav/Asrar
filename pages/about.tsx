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
                    <img src="/assets/imgs/About us image.jpg" alt="" className='about-image' />
                </div>

                <section>
                    <div className="row">
                        <div className="col-12">
                            <p className='main-desc' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus dolorum itaque aliquam dolor fuga. Quidem dicta natus ipsa eaque nostrum sint voluptates dolores cupiditate magnam delectus, explicabo, rem, perspiciatis tempora!</p>
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

                            {/* <h1 className='section-heading'>
                               Asrar
                            </h1> */}
                            <img src={`/assets/logos/asrar_logo.svg`} alt="Logo"
                                className='menu-logo white-logo' style={{width: "200px" , objectFit: "contain"}} />
                        </div>

                        <div className="col-lg-6 d-flex align-items-center">
                            <p className='description' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, magni iusto iste eos inventore nobis quam voluptates ipsa, recusandae itaque rem, nisi praesentium neque cupiditate explicabo dolores repellat dolor delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti temporibus beatae ad exercitationem autem sunt assumenda dolor officia enim libero consequatur natus quis eligendi, molestiae modi, architecto dicta doloremque.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
