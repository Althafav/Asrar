import Image from 'next/image';
import React from 'react'
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';
import Slider from 'react-slick';

export default function ImageSliderCompnent(props: any) {

    const NextArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div className="custom-next-arrow" onClick={onClick}>
                <HiArrowSmRight />
            </div>
        );
    };

    const PrevArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div className="custom-prev-arrow" onClick={onClick}>
               <HiArrowSmLeft />
            </div>
        );
    };


    var settings = {
        dots: false,
        infinite: true,


        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        className: "center",
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    

    return (
        <div className='slider-container'>
            <div className="row">
                <Slider {...settings}>
                    {props.exhibitorImages.map((item: any, index: number) => {
                        return (
                            <div className="col-lg-4"  key={`image-${index}`}>

                                <img src={item.url} alt="image" className='carousel-image' />
                            </div>
                        )
                    })}


                </Slider>
            </div>
        </div>
    )
}
