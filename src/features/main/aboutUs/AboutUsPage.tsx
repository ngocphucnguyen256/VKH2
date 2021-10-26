import * as React from 'react';
import OtherHomeHeader from '../other/otherHomeHeader/OtherHomeHeader';
import { translate } from '../../../i18n/index';
import Introduction from '../home/introduction/Introduction';
import Testimonials from '../home/testimonials/Testimonials';
import Newsletter from '../home/newsletter/Newsletter';

export interface AboutUsProps {
}

export default function AboutUsPage(props: AboutUsProps) {
    return (
        <div>
            <OtherHomeHeader title={translate('Về chúng tôi')} />
            <Introduction />
            <Testimonials />

        </div>
    );
}
