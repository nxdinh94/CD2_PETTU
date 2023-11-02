import React, { Component } from 'react';
import Slider from 'react-slick';
import './SliderCarousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '~/components/Image';
import { useState } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';


import 'bootstrap/dist/css/bootstrap.min.css';
import Modals from '~/components/Modal';



function SliderCarousel({ settings, dataPet }) {
    const [modal, setModal] = useState(false);

    // Toggle for Modal
    const toggle = () => setModal(!modal);
    return (
        <div>
            <h2>Single Item</h2>
            <Slider {...settings}>
                {dataPet.map((data, index) => {
                    return (
                        <div className="section-customize" key={index}>
                            <div className="image">
                                <Image borderRadius = {'10px'}  width={'100%'} height={'185px'} src={data.img} />
                            </div>
                            <Modals petDetail={data.petDetail}></Modals>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default SliderCarousel;
