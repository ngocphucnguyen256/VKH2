import * as React from 'react';
import { useController } from 'react-hook-form';
import { InputFieldProps } from './InputField';


export default function TextAreField({ name, control, placeholder }: InputFieldProps) {
    const { field: { value, onChange, onBlur, ref }, fieldState: { invalid, error } } = useController({ name, control })

    return (
        <div>
            <textarea id="mesage" value={value} onChange={onChange} name={name} className="contact-input contact-textare" placeholder={placeholder} />
            {invalid && error?.message && <div className="error-message">{error.message}</div>}

        </div>
    );
}
