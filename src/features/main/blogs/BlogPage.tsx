import * as React from 'react';
import OtherHomeHeader from '../other/otherHomeHeader/OtherHomeHeader';
import { translate } from '../../../i18n/index';
import axiosClient from '../../../api/axiosClient';
import { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
export interface BlogPageProps {
}

export default function BlogPage(props: BlogPageProps) {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        axiosClient.get('/blogs').then((response:any) =>{
            setBlogs(response);
        });
        
    }, [])
    return (
        <div>
     
            <OtherHomeHeader title={translate('Blog')} />
            {blogs.map(blog => (
                <div className="grid wide" style={{marginTop:50, marginBottom:50}}>
                  
                    <Blog {...blog}/>
                </div>
            ))}
        </div>
    );
}
