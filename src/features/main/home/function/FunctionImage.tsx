import * as React from 'react';

export interface FunctionImageProps {
    imageURL: string
}

export default function FunctionImage(props: FunctionImageProps) {
    return (
        <img className="marginTopFuntionItem function__image marginInMobile" src={props.imageURL} alt="" />
    );
}
