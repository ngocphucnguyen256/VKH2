import * as React from 'react';
import { translate } from '../../../../i18n/index';

import './index.css'
export interface NewsletterProps {
}

export default function Newsletter(props: NewsletterProps) {
    return (
        <div className="newsletter">
            <div className="cover0-65">
                <div className="newsletter__content">
                    <div className="newsletter__title">{
                        translate('Newsletter')
                    }</div>
                    <div className="newsletter__des">{translate('Subscribe to our newsletters now and stay up to date with new collections, the latest lookbooks and exclusive offers.')}</div>
                    <div className="newsletter__input">
                        <input className="edit_text" type="text" placeholder={translate('Enter your email address here.')} />
                        <div className="divider_height"></div>
                        <div className="btn_sub">
                            {translate('Subcribe').toUpperCase()}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
