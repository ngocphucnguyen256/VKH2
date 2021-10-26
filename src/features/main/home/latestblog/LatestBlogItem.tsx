import * as React from 'react';

export interface LatestBlogItemProps {
    imgURL: string,
    title: string,
    time: string,
    numberOfComment: string,
    des: string
}

export default function LatestBlogItem(props: LatestBlogItemProps) {
    return (
        <div className="blog-item">
            <img className="blog-item__image" src={props.imgURL}></img>
            <div className="blog-item__title">{props.title}</div>
            <div className="blog-item__middle">
                <div className="blog-item__time">{props.time}</div>
                <div className="blog-item__comment">{props.numberOfComment}</div>
            </div>
            <div className="blog-item__des">{props.des}</div>
        </div>
    );
}
