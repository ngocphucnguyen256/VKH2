import * as React from 'react';
import { translate } from '../../../../i18n/index';
import CoursesItem, { CoursesItemProps } from './CoursesItem';
import './coursesindex.css'
import listCourse from './dataCourses';
export interface CoursesProps {
    showTitle?: boolean
}

export default function Courses({ showTitle = true }: CoursesProps) {

    return (
        <div className="course">
            {showTitle && <div className="course__title">
                {translate('Chương trình đào tạo').toUpperCase()}
            </div>
            }
            <div className="grid wide">
                <div className="row row-course">
                    {listCourse.map((item, index) => {
                        return <CoursesItem {...item} key={index} />
                    })}
                </div>
            </div>

        </div>
    );
}
