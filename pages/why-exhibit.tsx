

import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { Home } from '@/models/home';
import { Homeexhibit } from '@/models/homeexhibit';
import { Homeexhibititem } from '@/models/homeexhibititem';
import Globals from '@/modules/Globals';
import React, { useEffect, useState } from 'react'

export default function ExhibitorProfilePage() {

    const [pageData, setPageData] = useState<Home | null>(null);


    useEffect(() => {
        Globals.KontentClient.item("home_page")
        .withParameter("depth", "2")
            .toObservable()
            .subscribe((response: any) => {

                setPageData(response.item);
            });

    }, []);



    if (!pageData) {
        return <SpinnerComponent />;
    }
    return (
        <div className='exhibitors-page-wrapper '>
            {
                pageData.home_exhibit.value.map((e: any, index: number) => {
                    var exhibit: Homeexhibit = e;
                    return (


                        <div className="why-exhibit--home"

                            id='WhyExhibit'
                            key={`exhibit-section-${index}`}
                        >
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-center">
                                        <div>
                                            <h1 className="section-heading text-gradient">{exhibit.heading.value}</h1>

                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-lg-5 mt-3 d-flex justify-content-center ">
                                    {
                                        exhibit.homeExhibitItem ? (
                                            exhibit.homeExhibitItem.value.map((ex: any, index: number) => {
                                                var exhibitItem: Homeexhibititem = ex;
                                                return (
                                                    <div className="col-12 col-md-6 col-lg-4 mb-3" key={`why-exhibit-${index}`}>

                                                        <div className="why-exhibit-card">

                                                            <img className="icon" src={exhibitItem.icon.value[0]?.url} alt='exhibit' />
                                                            <p
                                                                className="desc"
                                                                dangerouslySetInnerHTML={{ __html: exhibitItem.content.value }}
                                                            />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        ) : ""
                                    }
                                </div>


                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}
