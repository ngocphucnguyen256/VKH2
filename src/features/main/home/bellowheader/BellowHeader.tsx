import * as React from 'react';
import { translate } from '../../../../i18n/index';

import './index.css'

export interface BellowHeaderProps {
}

export default function BellowHeader(props: BellowHeaderProps) {
    return (
        <div className="bellowHeader">
            <div className="grid wide ">
                <div className="row bellowHeader-row">
                    <div className="col  l-4 m-12 c-12 bellowheader-item">
                        <div className="image-item">
                            <img src="http://gonthemes.info/eschool/wp-content/uploads/2018/11/icon-box-01.png" alt="" />
                        </div>
                        <div className="content">
                            <div className="content-title">
                                {translate('Chương trình').toUpperCase()}
                            </div>
                            <div className="content-des">{translate('Cung cấp hơn 400 chương trình được giảng dạy bởi các giáo sư giỏi nhất trên toàn cầu.')}</div>
                        </div>
                    </div>
                    <div className="col  l-4 m-12 c-12 bellowheader-item bellowheader-margin-top">
                        <div className="image-item image-item-margin-top">
                            <img src="http://gonthemes.info/eschool/wp-content/uploads/2018/11/icon-box-02.png" alt="" />
                        </div>
                        <div className="content">
                            <div className="content-title">
                                {translate('Chứng chỉ').toUpperCase()}
                            </div>
                            <div className="content-des">{translate('Các chứng chỉ sẽ kết nối bạn với cơ hội thực tập và việc làm.')}</div>
                        </div>
                    </div>
                    <div className="col l-4 m-12 c-12 bellowheader-item bellowheader-margin-top">
                        <div className="image-item image-item-margin-top">
                            <img src="http://gonthemes.info/eschool/wp-content/uploads/2018/11/icon-box-03.png" alt="" />
                        </div>
                        <div className="content">
                            <div className="content-title">
                                {translate('Khả năng liên kết').toUpperCase()}
                            </div>
                            <div className="content-des">{translate('Gặp với giáo viên nghề nghiệp để đánh giá kỹ năng và sở thích nghề nghiệp của bạn.')}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
