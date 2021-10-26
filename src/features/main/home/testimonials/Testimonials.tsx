import * as React from 'react';
import './index.css'
import { translate } from '../../../../i18n/index';
import ItemSlide from './ItemSlide';
import { Slide } from 'react-slideshow-image';
import slideList, { TestimonialsDTO } from './TestimonialsData';
import BaseProps from '../../../base/BaseProps';



const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    canSwipe: true,
    autoplay: false,
    prevArrow: <div className="prevArrow"><i className="fas fa-chevron-left "></i></div>,
    nextArrow: <div className="nextArrow"><i className="fa fa-chevron-right "></i></div>,

};

export interface TestimonialsProps extends BaseProps {
}

export default function Testimonials(props: TestimonialsProps) {
    return (
        <div className="testimonials" ref={props.innerRef}>
            <h3 className="testimonials__title section-home">{translate('Ban điều hành').toUpperCase()}</h3>
            <div className="testimonials__slide">
                <Slide  {...properties}>
                    {slideList.map((item: TestimonialsDTO, index: number) => {
                        return (<div key={index} className="itemSlide">
                            <div className="itemSlide__title">{item.title}</div>
                            <img className="itemSlide__avatar" src={item.avatarURL} />
                            <div className="itemSlide__name">{item.name}</div>
                            <div className="itemSlide__position">{item.position}</div>
                        </div>)
                    })}
                </Slide>
            </div>

        </div>
    );
}
