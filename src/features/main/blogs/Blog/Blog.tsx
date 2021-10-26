import React from 'react'
import { apiConfig } from '../../../../api/apiConfig';
import {  Link } from "react-router-dom";
import './blog.css';
interface BlogProps {
    id: number;
    title: string;
    content: string;
    write: string;
    img: {
            url: string
    };
    created_at: string;
    updated_at: string;

}

function Blog(props: BlogProps) {

    return (
        <div className="box-blog">
            <img className="blog-img" src={apiConfig.urlImage(props.img.url)} alt="" />
            <h2>{props.title}</h2>
            <p className="content-cut">{props.content}</p>
            <Link to={`/blogs/${props.id}`}>
                <div className="background-radius_primary button-read">READ MORE</div>
            </Link>
        </div>
    )
}



export default Blog

