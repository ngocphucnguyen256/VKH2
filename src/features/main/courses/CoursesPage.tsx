import React, { useEffect } from 'react';
import { Route, Switch, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import Courses from '../home/courses/Courses';
import OtherHomeHeader from '../other/otherHomeHeader/OtherHomeHeader';
import { PATH_COURSES_AI, PATH_COURSES, PATH_COURSES_ATTT, PATH_COURSES_DETAIL, PATH_COURSES_HTTT, PATH_COURSES_IOT, PATH_COURSES_KTPM } from '../../../constants/pathConstants';
import CoursesDetail from './coursesDetail/CoursesDetail'
import { useAppSelector } from '../../../app/hooks';
import { verticalMenuSelector } from '../base/components/menu/VerticalMenuSlice';
import { MENU_COURSES } from '../base/valueMenu';
import { translate } from '../../../i18n/index';

export interface CoursesProps {
}

export default function CoursesPage(props: CoursesProps) {
    var parentPath = useRouteMatch();
    var clickMenu = useAppSelector(verticalMenuSelector).onClickMenu;
    var history = useHistory()
    var title = translate('Chương trình đào tạo');
    useEffect(() => {
        if (clickMenu?.key === MENU_COURSES[0].key) {
            // kỹ thuật phần mềm
            history.push(parentPath.path + PATH_COURSES_KTPM)
        } else if (clickMenu?.key === MENU_COURSES[1].key) {
            // hệ thống thông tin
            history.push(parentPath.path + PATH_COURSES_HTTT)
        } else if (clickMenu?.key === MENU_COURSES[2].key) {
            // Trí tuệ nhân tạo
            history.push(parentPath.path + PATH_COURSES_AI)
        } else if (clickMenu?.key === MENU_COURSES[3].key) {
            // Internet vạn vật
            history.push(parentPath.path + PATH_COURSES_IOT)
        } else if (clickMenu?.key === MENU_COURSES[4].key) {
            // An toàn thông tin
            history.push(parentPath.path + PATH_COURSES_ATTT)
        }
    }, [clickMenu])

    if (window.location.pathname.includes(PATH_COURSES_KTPM)) {
        title = MENU_COURSES[0].value || ""
    } else if (window.location.pathname.includes(PATH_COURSES_HTTT)) {
        title = MENU_COURSES[1].value || ""
    } else if (window.location.pathname.includes(PATH_COURSES_AI)) {
        title = MENU_COURSES[2].value || ""
    } else if (window.location.pathname.includes(PATH_COURSES_IOT)) {
        title = MENU_COURSES[3].value || ""
    } else if (window.location.pathname.includes(PATH_COURSES_ATTT)) {
        title = MENU_COURSES[4].value || ""
    } else if (window.location.pathname.includes(PATH_COURSES)) {
        title = translate('Chương trình đào tạo')
    }

    return (
        <div>
            <OtherHomeHeader title={title} />
            <Switch>
                <Route path={parentPath.path + PATH_COURSES_DETAIL}>
                    <CoursesDetail />
                </Route>
                <Route>
                    <Courses showTitle={false} />
                </Route>
            </Switch>

        </div>
    );
}
