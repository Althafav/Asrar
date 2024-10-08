import SpinnerComponent from "@/components/UI/SpinnerComponent";
import { Basiccontentpage } from "@/models/basiccontentpage";
import Globals from "@/modules/Globals";
import Head from "next/head";
import React from "react";


export default class CookiesPolicy extends React.Component<
    {},
    {
        pageData: Basiccontentpage;
        isLoaded: boolean;
    }
> {
    constructor(props: any) {
        super(props);
        this.state = {
            pageData: new Basiccontentpage(),
            isLoaded: false
        };
    }

    componentDidMount() {
        Globals.KontentClient.item("cookies_policy")
            .toObservable()
            .subscribe((response: any) => {
                this.setState({
                    pageData: response.item,
                    isLoaded: true,
                });
            });

    }
    render(): React.ReactNode {
        const { pageData, isLoaded } = this.state;

        if (!isLoaded) {
            return <SpinnerComponent />
        }

        return (
            <React.Fragment>
                <Head>
                    <title>{`${Globals.SITE_NAME} | ${pageData.pageTitle.value}`}</title>
                    <meta name="title" content={pageData.metaTitle.value} />
                    <meta
                        name="description"
                        content={pageData.metaDescription.value}
                    />
                </Head>
                <div className="margin_top">
                    <div className="container">
                        <section className="pt-5">
                            <div>
                                <h1 className="mb-4">Cookies Policy</h1>
                                <hr className="mb-5"/>
                                <p
                                    className="text-white"
                                    dangerouslySetInnerHTML={{ __html: pageData.content.value }}
                                />
                            </div>
                        </section>
                    </div>



                </div>





            </React.Fragment>
        );
    }
}
