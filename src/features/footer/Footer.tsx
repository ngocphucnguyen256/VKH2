import * as React from 'react';
import './index.css'
import { translate } from '../../i18n/index';
export interface FooterProps {
}


export default function Footer(props: FooterProps) {
    return (
        <div className="footer">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-4 m-6 c-12 footer__about-us">
                        <div className="footer__title">{translate('Về chúng tôi').toUpperCase()}</div>
                        <div className="footer__des marginTop25">
                            <ul className="list-account">
                                <li>
                                    VIỆN NGHIÊN CỨU & SÁNG TẠO KHOA HỌC MÁY TÍNH
                                </li>
                                <li>
                                    Institute of Research & Innovation in  Computer Science
                                </li>
                                <li>
                                    Tên viết tắt:        IRICS
                                </li>
                                <li>
                                    Năm thành lập:   07-2021

                                </li>
                                <li>
                                    Mã số thuế: abcxyz
                                </li>
                            </ul>
                        </div>
                        <div className="footer__social">
                            <div className="social-parent">
                                <i className="fab fa-facebook-square  social fa-2x"></i>
                            </div>
                            <div className="social-parent">
                                <i className="fab fa-twitter-square  social fa-2x"></i>
                            </div>
                            <div className="social-parent">
                                <i className="fab fa-instagram-square social fa-2x"></i>
                            </div>
                            <div className="social-parent">
                                <i className="fab fa-google-plus-square social fa-2x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 m-6 c-12 footer__recent-post marginInMobile">
                        <div className="footer__title">{translate('Sự kiện ấn phẩm mới')}</div>
                        <ul className="list-account marginTop25">
                            <li className="list-account__item">{translate('Motion animation and VR headset')}</li>
                            <li className="list-account__item">{translate('Awesome tip to become CEO of big network startup')}</li>
                            <li className="list-account__item">{translate('Top 5 amazing changing for the social media industry')}</li>

                        </ul>
                    </div>
                    <div className=" col l-4 m-6 c-12 footer__contact-us marginInMobile">
                        <div className="footer__title">{translate('Liên hệ')}</div>

                        <div className="footer__contact-us__item marginTop25">
                            <i className="fas fa-map-marker-alt footer__contact-us__item-icon"></i>
                            <div className=" footer__contact-us__item-text">Trụ Sở : Tầng 1 - 85A Trương Văn Thành, phường Hiệp Phú , Tp. Thủ Đức, Tp. HCM</div>
                        </div>
                        <div className="footer__contact-us__item marginTop8">
                            <i className="fas fa-phone-alt footer__contact-us__item-icon"></i>
                            <div className=" footer__contact-us__item-text">0925688668</div>
                        </div>

                        <div className="footer__contact-us__item marginTop8">
                            <i className="fas fa-envelope footer__contact-us__item-icon"></i>
                            <div className=" footer__contact-us__item-text">info@irics.vn</div>
                        </div>



                    </div>

                </div>
            </div>

        </div>

    );
}
