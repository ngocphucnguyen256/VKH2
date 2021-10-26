import * as React from 'react';
import { translate } from '../../../../i18n';
import NavBar from '../../base/components/nav/baseNavBar';
import './index.css'
export interface CoursesHeaderProps {
    title: string
}

export default function OtherHomeHeader({ title }: CoursesHeaderProps) {
    return (
        <div className="courses-header">
            <div className="courses-header__opaticy">
                <NavBar />
                <div className="courses-header__title">
                    {translate(title).toUpperCase()}
                </div>

            </div>
        </div>
    );
}

