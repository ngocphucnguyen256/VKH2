import * as React from 'react';
import Rating from '@material-ui/lab/Rating';
import './coursesindex.css'

export interface CoursesItemProps {
    imgURL: string,
    avatarURL: string,
    name: string,
    description: string,
    numberOfStar: number,
    price: string,
    priceToShow: string,
    titleButton: string
}

export default function CoursesItem(props: CoursesItemProps) {
    return (
        <div className="col l-4 m-6 c-12 col__item-course">
            <div className="item-courses">
                <img className="item-courses__top" src={props.imgURL} alt="" />

                <div className="item-course__middle">
                    <img src={props.avatarURL} alt="" className="courses-avatar" />
                </div>
                <div className="tem-course__info">
                    <div className="item-course__name">{props.name}</div>
                    <div className="item-course__des">{props.description}</div>
                    <Rating className="item-course__rating" name="read-only" value={props.numberOfStar} readOnly />
                    <div></div>
                    <div className="background-radius_primary item-course__button">{props.titleButton}</div>

                </div>

                <div className="item-courses__price">
                    {props.price && <div className="price__cost">
                        {props.price}
                    </div>}
                    {props.priceToShow &&
                        <div className="price__cost-show">
                            {props.priceToShow}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
