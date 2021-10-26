import * as React from 'react';
import { translate } from '../../../../i18n/index';
import BaseProps from '../../../base/BaseProps';
import './index.css'
export interface StatisticProps extends BaseProps {

}

export default function Statistic({ innerRef }: StatisticProps) {
    return (
        <div className="statistic" ref={innerRef}>
            <div className="grid wide">
                <div className="row statistic__row">
                    <div className="col l-5 m-12 c-12 statistic__item">
                        <div className="statistic__item-number">{translate('Tầm nhìn').toUpperCase()}</div>
                        <div className="statistic__item-des">{translate('Viện nghiên cứu & Sáng tạo Khoa học Máy tính sẽ trở thành một trong những trung tâm hàng đầu trong lĩnh vực nghiên cứu, đào tạo, huấn luyện, tư vấn và cung cấp thông tin khoa học về công nghệ thông tin và tự động hóa có uy tín trong phạm vi cả nước.').toUpperCase()}</div>
                    </div>
                    <div className="col l-2 m-0 c-0 statistic__item marginTop-item">
                        <div className="statistic__item-number "></div>
                        <div className="statistic__item-des"></div>
                    </div>
                    <div className="col l-5 m-12 c-12 statistic__item marginTop-item">
                        <div className="statistic__item-number ">{translate('Sứ mệnh').toUpperCase()}</div>
                        <div className="statistic__item-des">{translate('Với phong cách phục vụ chuyên nghiệp, hiện đại và đồng cảm - Viện Nghiên cứu & Sáng tạo Khoa học Máy tính sẵn sàng đáp ứng mọi nhu cầu và đòi hỏi về nghiên cứu, đào tạo, huấn luyện, tư vấn và cung cấp thông tin liên quan đến các lĩnh vực công nghệ và tự động hóa.').toUpperCase()}</div>
                    </div>
                    {/* <div className="col l-3 m-12 c-12 statistic__item marginTop-item">
                        <div className="statistic__item-number "></div>
                        <div className="statistic__item-des">{translate('YEARS OF EXPERIENCEN').toUpperCase()}</div>
                    </div>
                    <div className="col l-3 m-12 c-12 statistic__item marginTop-item">
                        <div className="statistic__item-number "></div>
                        <div className="statistic__item-des">{translate('STUDENTS').toUpperCase()}</div>
                    </div> */}
                </div>
            </div>

        </div>
    );
}
