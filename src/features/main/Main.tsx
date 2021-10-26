import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PATH_HOME, PATH_ROOT } from '../../constants';
import Courses from './home/courses/Courses';
import HeaderHome from './home/header/HeaderHome';
import HomePage from './home/HomePage';
import { PATH_ABOUT_US, PATH_BLOGS, PATH_COURSES, PATH_CONTACT, PATH_DETAIL_BLOGS } from '../../constants/pathConstants';
import CoursesPage from './courses/CoursesPage';
import AboutUsPage from './aboutUs/AboutUsPage';
import ContactPage from './contacts/ContactPage';
import BlogPage from './blogs/BlogPage';
import DetailBlog from './blogs/DetailBlog/DetailBlog';
export interface MainProps {
}

export default function Main(props: MainProps) {
    const LIST_IMAGE = ["http://gonthemes.info/eschool/wp-content/uploads/2018/11/slider02.jpg", "http://gonthemes.info/eschool/wp-content/uploads/2018/11/slider01.jpg"]
    return (
        <Switch>
            <Route path={PATH_COURSES}>
                <CoursesPage />
            </Route>
            <Route path={PATH_DETAIL_BLOGS} component={DetailBlog}/>
            <Route path={PATH_BLOGS}>
                <BlogPage />
            </Route>
            <Route path={PATH_ABOUT_US}>
                <AboutUsPage />
            </Route>
            <Route path={PATH_CONTACT}>
                <ContactPage />
            </Route>
            <Route>
                <HomePage />
            </Route>

        </Switch>
    );
}
