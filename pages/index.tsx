import CTABannerComponent from '@/components/CTABannerComponent';
import HeroSectionComponent from '@/components/HeroSectionComponent'

import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { ExhibitorProfile, whyExhibit, Workshops } from '@/constants/data';

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
import { motion } from "framer-motion";


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

  const aboutcontent = `Prepare to be captivated by the brilliance of ASRAR, an 
event exclusively dedicated to beauty and fashion 
professionals. This ground-breaking event will unite 
industry experts, manufacturers, suppliers, and innovators 
to showcase the latest trends, products, and technologies 
shaping the world of beauty and fashion.`
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
                  <div className="col-lg-12 mb-lg-0">
                    <motion.h1
                      className="section-heading text-center text-gradient"
                      initial={{ y: 50, opacity: 0 }}  // Adding opacity for a smoother transition
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}  // Adjusted for smoother effect
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      Who We Are
                    </motion.h1>

                    <motion.p
                      initial={{ y: 50, opacity: 0 }}  // Adding opacity to match the heading transition
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}  // A longer delay for better separation
                      viewport={{ once: true, amount: 0.5 }}
                      className="description mt-lg-5 mt-3 text-center"
                    >
                      {aboutcontent}
                    </motion.p>
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
            {Workshops.map((item: any, index: number) => {
              return (
                <motion.div key={`workshop-${index}`} className="work-shop-card" initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 * index, ease: 'easeInOut' }}
                  viewport={{ once: true, amount: 0.1 }}>
                  <img src="/assets/imgs/w1.jpg" alt="" className='work-shop-image' />
                  <div className="card-body-work-shop">
                    <h5 className='name mb-4  text-gradient'>{item.name}</h5>
                    <p className='content line-clamp-3'>{item.content}</p>
                  </div>
                </motion.div>
              )
            })}



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
                <motion.div className="profile-card" key={`exhibitor-profile-${index}`} initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 * index, ease: 'easeInOut' }}
                  viewport={{ once: true, amount: 0.1 }}>

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

                </motion.div>
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

                    whyExhibit.items.map((exhibitItem: any, index: number) => {

                      return (
                        <div className="col-12 col-md-6 col-lg-4 mb-3" key={`why-exhibit-${index}`}>

                          <motion.div className="why-exhibit-card" initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 * index, ease: 'easeInOut' }}
                            viewport={{ once: true, amount: 0.1 }}>

                            <img className="icon" src={exhibitItem.image} alt='exhibit' />
                            <p
                              className="desc"

                            >
                              {exhibitItem.name}
                            </p>
                          </motion.div>
                        </div>
                      )
                    })

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
