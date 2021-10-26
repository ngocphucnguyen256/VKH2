import { Slide } from 'react-slideshow-image';
import * as React from 'react';
import './index.css'
import slideList, { TestimonialsDTO } from './TestimonialsData'
export interface ItemSlideProps {
}

export default function ItemSlide(props: ItemSlideProps) {

    return (
        <div>
            <Slide >

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
    );
}

