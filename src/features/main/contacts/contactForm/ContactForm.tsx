import * as React from 'react';
import { translate } from '../../../../i18n/index';
import './index.css'
import InputField from './InputField';
import { useForm } from 'react-hook-form';
import ContactDTO from '../../../../models/student/ContactDTO';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import TextAreField from './TextareField';

export interface ContactFormProps {
}
function isEmail(val: string): boolean {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(val)) {
        return false;
    }
    return true;
}
export default function ContactForm(props: ContactFormProps) {


    const schema = yup.object().shape({
        name: yup.string().required("Vui lòng nhập tên").test("test", "Vui lòng nhập đầy đủ họ tên", (value) => {
            return (value?.trim().split(" ").length || 0) >= 2
        }),
        email: yup.string().required("Vui lòng nhập email").test("test", "Email không đúng định dạng. Vui lòng thử lại", (value) => {
            return isEmail(value || "");
        }),
        phone: yup.number().required("Vui lòng nhập số điện thoại"),
        message: yup.string().required("Vui lòng nhập nội dung")

    });


    const { control, handleSubmit, formState: { isSubmitting } } = useForm<ContactDTO>({
        defaultValues: {
        },
        resolver: yupResolver(schema)

    });
    const handleFormSubmit = async (value: ContactDTO) => {
        console.log("Submit : ", value);

    }

    return (
        <div className="contact-form">
            <div className="grid wide">
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="row contact-row">
                        <div className="col l-12 m-12 c-12 contact-title">{translate('Thông tin liên hệ')}</div>
                        <div className="col l-6 m-12 c-12 contact-col">
                            <InputField name="name" type="text" control={control} placeholder="Tên *" />
                        </div>
                        <div className="col l-6 m-12 c-12 contact-col">
                            <InputField name="email" type="text" control={control} placeholder="Email *" />
                        </div>
                        <div className="col l-6 m-12 c-12 contact-col">
                            <InputField name="phone" type="number" control={control} placeholder="Phone *" />
                        </div>
                        <div className="col l-6 m-12 c-12 contact-col">
                            <InputField name="website" type="text" control={control} placeholder="Website" />
                        </div>

                        <div className="col l-12 m-12 c-12 contact-col">
                            <TextAreField name="message" placeholder="Message *" control={control} />
                        </div>
                        <div className="col l-12 m-12 c-12 contact-col contact-col__button">
                            <button type='submit' className="background-radius_primary contact-button">{translate('Submit')}</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}
