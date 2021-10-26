import React, { useEffect, useRef } from 'react';
import BellowHeader from './bellowheader/BellowHeader';
import Courses from './courses/Courses';
import HeaderHome from './header/HeaderHome';
import Introduction from './introduction/Introduction';
import LatestBlog from './latestblog/LatestBlog';
import Newsletter from './newsletter/Newsletter';
import Statistic from './statistic/Statistic';
import Testimonials from './testimonials/Testimonials';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { useAppSelector } from '../../../app/hooks';
import { verticalMenuSelector } from '../base/components/menu/VerticalMenuSlice';
import { MENU_HOME } from '../base/valueMenu/index';
import Function from './function/Function';

export interface Homerops {
}

export default function HomePage(props: Homerops) {
    const LIST_IMAGE = ["http://gonthemes.info/eschool/wp-content/uploads/2018/11/slider02.jpg", "http://gonthemes.info/eschool/wp-content/uploads/2018/11/slider01.jpg"]
    var introductionRef = useRef<HTMLElement>(null);
    var statisticRef = useRef<HTMLElement>(null);
    var functionRef = useRef<HTMLElement>(null);
    var boardRef = useRef<HTMLElement>(null);

    var onClick = useAppSelector(verticalMenuSelector).onClickMenu;
    console.log("Home", onClick);

    useEffect(() => {
        if (onClick?.key == MENU_HOME[0].key) {
            // Lời chào của viện trưởng
            introductionRef.current?.scrollIntoView()
        } else if (onClick?.key == MENU_HOME[1].key) {
            //Tầm nhìn và sứ mệnh
            statisticRef.current?.scrollIntoView()
        } else if (onClick?.key == MENU_HOME[2].key) {
            // Chức năng và nhiệm vụ
            functionRef.current?.scrollIntoView()
        } else if (onClick?.key == MENU_HOME[3].key) {
            // Ban lãnh đạo
            boardRef.current?.scrollIntoView()
        }
    }, [onClick])
    return (
        <div>
            <HeaderHome listImage={LIST_IMAGE} />
            <BellowHeader />
            <Introduction innerRef={introductionRef} />
            <Statistic innerRef={statisticRef} />
            <Function innerRef={functionRef} />
            <Courses />
            <Newsletter />
            <Testimonials innerRef={boardRef} />
            <LatestBlog />

        </div>
    );
}
