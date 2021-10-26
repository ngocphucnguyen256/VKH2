import React, { InputHTMLAttributes } from 'react';
import './index.css'
import { useController } from 'react-hook-form';
import { Control } from 'react-hook-form';
export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string,
    name: string,
    control: Control<any>
}

export default function InputField({ placeholder, name, control, type }: InputFieldProps) {
    const { field: { value, onChange, onBlur, ref }, fieldState: { invalid, error } } = useController({ name, control })

    return (
        <div>
            <input id="outlined-basic" ref={ref}
                name={name} className="contact-input" type={type} placeholder={placeholder} onChange={onChange} value={value} />
            {invalid && error?.message && <div className="error-message">{error.message}</div>}
        </div>);
}
