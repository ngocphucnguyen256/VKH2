import * as React from 'react';
import { translate } from '../../../../i18n/index';
import './index.css'
import introductionData from './introductionData';

export interface IntroductionProps {
    innerRef?: any
}

export default function Introduction({ innerRef }: IntroductionProps) {
    return (
        <div ref={innerRef} className="introduction">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-6 m-12 c -12 introduction__text">
                        <div className="introduction__title">
                            {translate(introductionData.title)}
                        </div>
                        <div className="introduction__des">
                            <p className="margin-text">
                                {translate(introductionData.des1)}
                            </p>
                            <p></p>
                            <p className="margin-text">
                                {translate(introductionData.des2)}
                            </p>
                            <p></p>
                            <p className="margin-text">
                                {translate(introductionData.des3)}
                            </p>

                            <p></p>
                            <p className="margin-text">
                                {translate(introductionData.signature)}
                            </p>

                        </div>
                        <div className="introduction__signature">
                            <img src="http://gonthemes.info/eschool/wp-content/uploads/2018/11/sign.png" alt="" />
                        </div>

                    </div>
                    <div className="col l-6 m-12 c -12 ">
                        <img className="introduction__image" src="http://gonthemes.info/eschool/wp-content/uploads/2018/11/about-us.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
