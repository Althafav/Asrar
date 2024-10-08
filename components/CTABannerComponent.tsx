import { Bannercta } from '@/models/bannercta';
import { Buttons } from '@/models/buttons';
import Globals from '@/modules/Globals';
import Link from 'next/link';
import React from 'react'

export default function CTABannerComponent() {
    const [sectionData, setSectionData] = React.useState(new Bannercta());
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        const subscription = Globals.KontentClient.item("bannercta")
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
        <div className='cta-banner-component-wrapper'
            style={{
                backgroundImage: "url('/assets/imgs/CTA Banner BG.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-lg-0 mb-3">
                       

                    </div>
                    <div className="col-lg-8 mb-lg-0 mb-3 d-flex justify-content-center gap-5 justify-content-lg-start align-items-center">
                    <h1 className='section-heading'>{sectionData.heading.value}</h1>
                        {sectionData.cta.value.map((m: any, index: number) => {
                            var item: Buttons = m;
                            return (
                                <Link href={item.link.value} target={item.target.value === 1 ? "_blank" : "_self"} key={`button-${index}`}>
                                    <img src="/assets/imgs/ASRAR_BOOK YOUR STAND.png" alt=""  className='book-stand-btn-image'/>
                                </Link>
                            )
                        })}

                    </div>
                </div>
            </div>

        </div>
    )
}
