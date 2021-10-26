import * as React from 'react';
import { translate } from '../../../../i18n/index';

export interface FunctionContentProps {
    title: string,
    listItem: string[]
}

export default function FunctionContent(props: FunctionContentProps) {
    return (
        <div className="function__content marginTopFuntionItem ">
            <div className="function__content__title">{translate(props.title)}</div>
            <ul>
                {
                    props.listItem.map((item, index) => {
                        return <li key={index} className="content__des">{translate(item)}</li>
                    })
                }
            </ul>
        </div>
    );
}
