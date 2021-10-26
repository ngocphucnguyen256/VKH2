import { Divider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../../../../app/hooks';
import { KeyValueDTO } from '../../../../../models/base/KeyValueDTO';
import { MENU_COURSES } from '../../valueMenu';
import { ClickMenuDTO, verticalMenuActions } from './VerticalMenuSlice';
import { PATH_COURSES, PATH_COURSES_AI, PATH_COURSES_ATTT, PATH_COURSES_HTTT, PATH_COURSES_IOT, PATH_COURSES_KTPM } from '../../../../../constants/pathConstants';
import { push } from 'connected-react-router';

export interface VerticalMenuProps {
    listMenu?: KeyValueDTO[],
    hasDivider?: boolean,
    type: 'scroll' | 'push'
}

export default function VerticalMenu({ listMenu, hasDivider, type }: VerticalMenuProps) {
    var useDisPatch = useAppDispatch();
    var history = useHistory()
    const HandleClick = (item: KeyValueDTO) => {
        var clickMenuDTO: ClickMenuDTO = {
            key: item.key || "",
            value: item.value || "",
            time: Date.now(),
            type: type
        }
        useDisPatch(verticalMenuActions.onClickMenu(clickMenuDTO))

    };

    return (
        <div className={`vertical-menu animation-fadein-0-3`}>
            {
                listMenu?.map((item, index) => {
                    return (
                        <div>
                            <div className="vertical-menu-item " key={index} onClick={() => { HandleClick(item) }}>
                                {item.value}
                            </div>
                            {hasDivider && <Divider className="divider" />}
                        </div>
                    );
                })
            }
        </div >
    );
}
