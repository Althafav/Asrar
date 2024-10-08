

import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { whyExhibit } from '@/constants/data';
import { Home } from '@/models/home';
import { Homeexhibit } from '@/models/homeexhibit';
import { Homeexhibititem } from '@/models/homeexhibititem';
import Globals from '@/modules/Globals';
import React, { useEffect, useState } from 'react'

interface WhyExhibitModel {
    id: number;
    heading: string;
    content: string;
    items: []
}

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

                                        whyExhibit.items.map((exhibitItem: any, index: number) => {

                                            return (
                                                <div className="col-12 col-md-6 col-lg-4 mb-3" key={`why-exhibit-${index}`}>

                                                    <div className="why-exhibit-card">

                                                        <img className="icon" src={exhibitItem.image} alt='exhibit' />
                                                        <p
                                                            className="desc"
                                                          
                                                        >
                                                            {exhibitItem.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        })

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
