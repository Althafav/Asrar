import CTABannerComponent from '@/components/CTABannerComponent';
import HeroSectionComponent from '@/components/HeroSectionComponent'

import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { ExhibitorProfile } from '@/constants/data';

import { Home } from '@/models/home';
import { Homeabout } from '@/models/homeabout';
import { Homebanner } from '@/models/homebanner';
import { Homeexhibit } from '@/models/homeexhibit';
import { Homeexhibititem } from '@/models/homeexhibititem';
import { WhyVisitSection } from '@/models/why_visit_section';
import Globals from '@/modules/Globals';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function HomePage() {

  const [pageData, setPageData] = useState<Home | null>(null);
  const [whyVisitSection, setwhyVisitSection] = useState<WhyVisitSection | null>(null);

  useEffect(() => {
    Globals.KontentClient.item("home_page")
      .withParameter("depth", "2")
      .toObservable()
      .subscribe((response: any) => {

        setPageData(response.item);
      });

    Globals.KontentClient.item("why_visit_section")
      .withParameter("depth", "2")
      .toObservable()
      .subscribe((response: any) => {

        setwhyVisitSection(response.item);
      });


  }, []);



  if (!pageData) {
    return <SpinnerComponent />;
  }
  return (
    <div className=''>
      <Head>
        <title>{`${Globals.SITE_NAME} | Home`}</title>
        <meta name="title" content={`${Globals.SITE_NAME} | Home`} />
        <meta name="description" content={`${Globals.SITE_NAME} | Home`} />
      </Head>
      {pageData.homebanner.value.map((m: any, index: number) => {
        var hero: Homebanner = m;

        return (
          <div key={`hero-${index}`}>
            <HeroSectionComponent mainHeading={hero.heading.value} slogan={hero.slogan.value} datevenu={hero.dateandvenu.value} ctaBtn={hero.buttons.value} totalVisitors={hero.totalvisitors.value} totalExhibitors={hero.totalexhibitors.value} totalCountries={hero.totalcountries.value} />

          </div>

        )
      })}
    
      {/* about section */}
      {
        pageData.homeabout.value.map((a: any, index: number) => {
          var about: Homeabout = a;

          return (


            <section key={`about-${index}`} id='AboutUs'>

              <div className="container about-us--home">
                <div className="row g-5">
                  <div className="col-lg-12 mb-lg-0 ">
                    <h1 className="section-heading text-center text-gradient">{about.heading.value}</h1>

                    <p
                      className="description mt-lg-5 mt-3 text-center"
                      dangerouslySetInnerHTML={{ __html: about.content.value }}
                    />

                  </div>

                </div>

              </div>
            </section>

          )
        })
      }


      <section className='work-shops-container' style={{
        backgroundImage: "url('/assets/imgs/workshop-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} id='Workshops'>
        <div className="container content-wrap">
          <div className="row">

            <div className="col-12 pt-5">
              <h2 className='section-heading text-gradient text-center'>Workshops</h2>
            </div>
          </div>


          <div className="work-shop-cards-wrapper mt-lg-5 mt-3">
            <div className="work-shop-card">
              <img src="/assets/imgs/w1.jpg" alt="" className='work-shop-image' />
              <div className="card-body-work-shop">
                <h5 className='name mb-4  text-gradient'>MAKEUP MASTERCLASSES</h5>
                <p className='content line-clamp-3'>Renowned makeup artists to conduct live demonstrations</p>
              </div>
            </div>

            <div className="work-shop-card">
              <img src="/assets/imgs/w1.jpg" alt="" className='work-shop-image' />
              <div className="card-body-work-shop">
                <h5 className='name mb-4 text-gradient'>MAKEUP MASTERCLASSES</h5>
                <p className='content line-clamp-3'>Renowned makeup artists to conduct live demonstrations</p>
              </div>
            </div>


            <div className="work-shop-card">
              <img src="/assets/imgs/w1.jpg" alt="" className='work-shop-image' />
              <div className="card-body-work-shop">
                <h5 className='name mb-4 text-gradient'>HAIR STYLING TUTORIALS</h5>
                <p className='content line-clamp-3'>Featuring top hairstylists who will demonstrate different hair styling
                  techniques</p>
              </div>
            </div>


            <div className="work-shop-card">
              <img src="/assets/imgs/w1.jpg" alt="" className='work-shop-image' />
              <div className="card-body-work-shop">
                <h5 className='name mb-4 text-gradient'>SKINCARE CONSULTATIONS</h5>
                <p className='content line-clamp-3'>Experts who will analyze skin types and recommend suitable products
                  and routines</p>
              </div>
            </div>


            <div className="work-shop-card">
              <img src="/assets/imgs/w1.jpg" alt="" className='work-shop-image' />
              <div className="card-body-work-shop">
                <h5 className='name mb-4 text-gradient'>BEAUTY PRODUCT DEMOS</h5>
                <p className='content line-clamp-3'>Beauty brands to showcase their latest products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* exhibitor profile */}
      <section className="exhibitor-profile-container">
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
      </section>


      <CTABannerComponent />
      {/* why exhibit section */}

      {
        pageData.home_exhibit.value.map((e: any, index: number) => {
          var exhibit: Homeexhibit = e;
          return (


            <section className="why-exhibit--home"

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
            </section>
          )
        })
      }




      {/* <NewsLetterComponent /> */}



    </div>
  )
}
