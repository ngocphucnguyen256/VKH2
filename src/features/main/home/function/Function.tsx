import * as React from 'react';
import './index.css'
import { translate } from '../../../../i18n/index';
import BaseProps from '../../../base/BaseProps';
import FunctionImage from './FunctionImage';
import FunctionContent from './FunctionContent';
import { DTBD, NCKHMT, NCUD, TVCN } from './FunctionData';
import { Divider } from '@material-ui/core';
export interface FunctionProps extends BaseProps {
}

export default function Function(props: FunctionProps) {
    return (
        <div className="function" ref={props.innerRef}>
            <div className="funtion__title">{translate('Chức năng và nhiệm vụ').toUpperCase()}</div>
            <div className="grid wide">
                <div className="row function-row">
                    <div className="col l-6 m-12 c-12 col-function order2">
                        <FunctionImage imageURL={NCKHMT.imageURL} />
                    </div>
                    <div className="col l-6 m-12 c-12 col-function order1">
                        <FunctionContent {...NCKHMT.content} />
                    </div>

                    <div className="col l-6 m-12 c-12 col-function order3">
                        <FunctionContent {...NCUD.content} />
                    </div>
                    <div className="col l-6 m-12 c-12 gravityRight col-function order4">
                        <FunctionImage imageURL={NCUD.imageURL} />
                    </div>
                    <div className="col l-6 m-12 c-12 col-function order6">
                        <FunctionImage imageURL={TVCN.imageURL} />
                    </div>
                    <div className="col l-6 m-12 c-12 col-function order5">
                        <FunctionContent {...TVCN.content} />
                    </div>

                    <div className="col l-6 m-12 c-12 col-function order7">
                        <FunctionContent {...DTBD.content} />
                    </div>
                    <div className="col l-6 m-12 c-12 gravityRight col-function order8">
                        <FunctionImage imageURL={DTBD.imageURL} />
                    </div>
                    <div className="col l-12 m-12 c-12 function__divider"></div>
                </div>
            </div>

        </div>
    );
}
