import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { Basiccontentpage } from '@/models/basiccontentpage';
import Globals from '@/modules/Globals';
import React, { useEffect, useState } from 'react'

export default function Thankyou() {
    const [pageData, setPageData] = useState<Basiccontentpage | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("thank_you_page")
            .toObservable()
            .subscribe((response: any) => {
                console.log('API Response:', response);
                setPageData(response.item);
            });
    }, []);

    if (!pageData) {
        return <SpinnerComponent />;
    }
    return (
        <div className="margin_top">
            <div className="container">
                <section className="pt-5">
                    <div>
                        <h1 className="mb-4">{pageData.bannerHeading.value}</h1>
                        <hr className="mb-5" />
                        <p
                            className="text-white"
                            dangerouslySetInnerHTML={{ __html: pageData.content.value }}
                        />
                    </div>
                </section>
            </div>



        </div>
    )
}
