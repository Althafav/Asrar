import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { Exhibitor } from '@/models/exhibitor';
import { Partneritem } from '@/models/partneritem';
import { Partnerpage } from '@/models/partnerpage';
import Globals from '@/modules/Globals';
import React, { useEffect, useState } from 'react'

export default function PartnersPage() {

    const [pageData, setPageData] = useState<Partnerpage | null>(null);


    useEffect(() => {
        Globals.KontentClient.item("partners_page")
            .toObservable()
            .subscribe((response: any) => {

                setPageData(response.item);
            });

    }, []);



    if (!pageData) {
        return <SpinnerComponent />;
    }
    return (
        <div className='margin_top'>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <h1 className='text-center section-heading'>Partners</h1>
                    </div>
                </div>
                <div className="row mt-5 g-4">
                    {
                        pageData.items.value.map((p: any, index:number) => {
                            var item: Partneritem = p;
                            return (
                                <div className="col-12 col-md-3 m-b-15 text-center" key={`partner-${index}`}>
                                   <img src={item.image.value[0].url} alt="" style={{height: "200px", width: "100%", objectFit: "contain"}}/>
                                   <h5 className='mt-2'>{item.name.value}</h5>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
