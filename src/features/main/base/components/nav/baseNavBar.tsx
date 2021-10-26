import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { PATH_BLOGS, PATH_COURSES, PATH_ROOT } from '../../../../../constants';
import { PATH_ABOUT_US, PATH_CONTACT } from '../../../../../constants/pathConstants';
import { translate } from '../../../../../i18n';
import { MENU_COURSES, MENU_HOME, MENU_PARENT } from '../../valueMenu';
import VerticalMenu from '../menu/VerticalMenu';
import VerticalMenuTowLevel from '../menu/VerticalMenuTwoLevel';
import './index.css';


export interface NavBarProps {
}

export default function NavBar(props: NavBarProps) {

    let history = useHistory();
    const path = useRouteMatch().path

    const [showMenu, setShowMenu] = useState(false)
    const ref = useRef<HTMLElement>();
    const handleMenu = () => {
        setShowMenu(!showMenu)
    }
    useEffect(() => {
        const clickOutSide = (e: MouseEvent) => {

            if (showMenu && ref.current && !(ref.current?.contains(e.target as Node) || false)) {
                setShowMenu(false)
            }
        }
        document.addEventListener("mousedown", clickOutSide)

        return () => {
            document.removeEventListener("mousedown", clickOutSide)
        }
    }, [showMenu])

    const onClickMenu = (path: string) => {
        history.push(path)
    }


    const activeStyle = { color: 'var(--primary-color)' };

    return (
        <div className="nav-bar">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-3 m-3 c-12 display-flex">
                        <div className="nav-bar-item-image">
                            <img className="navbar__image-home" src="http://gonthemes.info/eschool/wp-content/themes/eschool/images/logo-white.png"></img>
                        </div>
                    </div>
                    <div className="col l-9 m-9 c-12">
                        <div className="nav-bar__menu_right">
                            <ul >
                                <li className="menu-item showInPC hideInMobile hideInTablet showMenu hoverPrimaryColor" style={path === PATH_ROOT ? activeStyle : {}} onClick={() => { onClickMenu(PATH_ROOT) }}>{translate("Trang chủ").toUpperCase()}
                                    <VerticalMenu listMenu={MENU_HOME} hasDivider={true} type='scroll' />
                                </li>
                                <li className="menu-item showInPC hideInMobile hideInTablet showMenu hoverPrimaryColor" style={path === PATH_COURSES ? activeStyle : {}} onClick={() => { onClickMenu(PATH_COURSES) }}>{translate("Đào tạo").toUpperCase()}
                                    <VerticalMenu listMenu={MENU_COURSES} hasDivider={true} type='push' />
                                </li>
                                <li className="menu-item showInPC hideInMobile hideInTablet showMenu hoverPrimaryColor" style={path === PATH_BLOGS ? activeStyle : {}} onClick={() => { onClickMenu(PATH_BLOGS) }}>{translate("Sự kiện-Ấn phẩm").toUpperCase()}</li>
                                <li className="menu-item showInPC hideInMobile hideInTablet showMenu hoverPrimaryColor" style={path == PATH_ABOUT_US ? activeStyle : {}} onClick={() => { onClickMenu(PATH_ABOUT_US) }}>{translate("Giới thiệu").toUpperCase()}</li>
                                <li className="menu-item showInPC hideInMobile hideInTablet showMenu hoverPrimaryColor" style={path == PATH_CONTACT ? activeStyle : {}} onClick={() => { onClickMenu(PATH_CONTACT) }}>{translate("Liên hệ").toUpperCase()}</li>
                                <li className=" hideInPC showInMobile showInTablet showMenu " onClick={() => { handleMenu() }}>
                                    <div className="menu-group hoverPrimaryColor" >
                                        <li className="menu-item-menu">{translate("Menu").toUpperCase()}</li>
                                        <i className="fas fa-bars"></i>
                                        <VerticalMenuTowLevel listMenu={MENU_PARENT} show={showMenu} innerRef={ref} />
                                    </div>
                                </li>
                                <li className="text-in-primary-button background-radius_primary">{translate("Đăng ký")}</li>

                                <li className="search-item circle-white-trans hoverPrimaryColor">
                                    <i className="fas fa-search white   center-flex"></i>
                                </li>

                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );

}
