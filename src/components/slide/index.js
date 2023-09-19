import React from "react";
import Slider from "react-slick";
import "./style.css"


function Slide(){

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          }
        ]
    }
    return(
        <>
            <Slider className="slider" {...settings}>
                <img src="/images/hamburger-cheese.jpg"/>
                <img src="/images/hamburger-crafters.jpg"/>
                <img src="/images/hamburger-noir.jpg"/>
                <img src="/images/hamburger-gourmet.jpg"/>
                <img src="/images/hamburger-just-eat.jpg"/>
                <img src="/images/hamburger-poulet.jpg"/>
            </Slider>
        </>
    )
}
export default Slide;