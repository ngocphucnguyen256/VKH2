import * as React from 'react';
import OtherHomeHeader from '../other/otherHomeHeader/OtherHomeHeader';
import { translate } from '../../../i18n/index';
import ContactForm from './contactForm/ContactForm';

export interface ContactPageProps {
}

export default function ContactPage(props: ContactPageProps) {
    return (
        <div>
            <OtherHomeHeader title={translate('Liên hệ')} />
            <ContactForm />

        </div>
    );
}
