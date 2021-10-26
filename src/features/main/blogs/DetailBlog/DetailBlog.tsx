import React, { useEffect, useState } from 'react'
import { apiConfig } from '../../../../api/apiConfig'
import axiosClient from '../../../../api/axiosClient';
import { useParams } from 'react-router-dom'
import OtherHomeHeader from '../../other/otherHomeHeader/OtherHomeHeader';
import { translate } from '../../../../i18n/index';
import ReactMarkdown from 'react-markdown';
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
function DetailBlog() {
    const [blog, setBlog] = useState<BlogProps| null>(null);
    const params: {id: string} = useParams();
    const link = 'https://hocvienkhoahoc.herokuapp.com';
    useEffect(() => {
        axiosClient.get(`/blogs/${params.id}`).then((response:any) =>{
            setBlog(response);
        });
    }, [params.id])
    const url = blog?.img?.url || null;
    const content = blog?.content || null;
    return (
        <>
        <OtherHomeHeader title={translate('Detail Blog')} />
        <div className="grid wide">
            <div style={{marginTop:50, marginBottom:50}} className="box-blog">
                <h2>{blog?.title}</h2>
                <img className="blog-img" src={apiConfig.urlImage(url)} alt="" />
              
                <ReactMarkdown 
                 transformImageUri={uri =>
                    uri.startsWith("http") ? uri : `${link}${uri}`
                  }
                >{content || 'Loading...'}</ReactMarkdown>
            </div>
        </div>
        </>
    )
}


export default DetailBlog

