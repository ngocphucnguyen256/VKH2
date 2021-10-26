import * as React from 'react';
import { useParams } from 'react-router-dom';
import { PATH_COURSES_DETAIL } from '../../../../constants';
import { ATTT, CoursesDetailDTO, HTTT, IOT, KTPM, TTNT } from './CoursesDetailData';
import { PATH_COURSES_AI, PATH_COURSES_ATTT, PATH_COURSES_HTTT, PATH_COURSES_IOT, PATH_COURSES_KTPM } from '../../../../constants/pathConstants';
import { translate } from '../../../../i18n';
import './index.css'
export interface CoursesDetailProps {
}

export default function CoursesDetail(props: CoursesDetailProps) {
    const { coursesdetail } = useParams<{ coursesdetail: string }>()
    var data: CoursesDetailDTO = {}
    if (PATH_COURSES_KTPM.includes(coursesdetail)) {
        data = KTPM;
    } else if (PATH_COURSES_HTTT.includes(coursesdetail)) {
        data = HTTT
    } else if (PATH_COURSES_IOT.includes(coursesdetail)) {
        data = IOT
    } else if (PATH_COURSES_AI.includes(coursesdetail)) {
        data = TTNT
    } else if (PATH_COURSES_ATTT.includes(coursesdetail)) {
        data = ATTT
    }
    return (
        <div className="grid wide">
            <div className="courses-detail">
                <img className="courses-img" src={data.imgURL}></img>
                <h3>{translate('Tổng quan')}</h3>
                <p>{data.tongQuan}</p>
                {data.trienVong && <div>
                    <h3>{translate('Triển vọng nghề nghiệp')}</h3>
                    <ul>
                        {data.trienVong.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </div>}
                <h3>{translate('Kinh nghiệm tích lũy sau chương trình')}</h3>
                <p>{data.kinhNghiem}
                </p>
            </div>
        </div>
    );
}
