import * as React from 'react';
import { translate } from '../../i18n/index';

import './index.css'
export interface FooterBottomProps {
}

export default function FooterBottom(props: FooterBottomProps) {
    return (
        <div className="footer__bottom">
            <div className="grid wide">
                <div className="footer__bottom-text">{translate('Viện Nghiên Cứu Và Sáng Tạo Khoa Học Máy Tính - IRICS')}</div>
            </div>
        </div>
    );
}
