import React, { useEffect, useRef, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import NavBar from '../../base/components/nav/baseNavBar';
import { homeHeaderActions, homeHeaderSelectors } from './homeHeaderSlice';
import './index.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { translate } from '../../../../i18n/index';

export interface HeaderHomeProps {
    listImage: string[]
}

interface ImageThumbnail {
    img1: string,
    img2: string
}



export default function HeaderHome({ listImage }: HeaderHomeProps) {
    const LIST_IMAGE = ["http://gonthemes.info/eschool/wp-content/uploads/2018/11/slider02.jpg", "http://gonthemes.info/eschool/wp-content/uploads/2018/11/slider01.jpg"]

    const anhNho1 = "http://gonthemes.info/eschool/wp-content/uploads/2018/11/slider02-80x50.jpg"
    const anhNho2 = "http://gonthemes.info/eschool/wp-content/uploads/2018/11/slider01-80x50.jpg";
    const listThumbnail = [anhNho1, anhNho2]

    const slideRef = useRef<Fade>(null);

    const initState: ImageThumbnail = {
        img1: listThumbnail[0],
        img2: listThumbnail[1],
    }
    const [thumbnail, setThumbnail] = useState<ImageThumbnail>(initState)

    const onChange = (previous: number, current: number) => {
        setThumbnail({
            img1: listThumbnail[previous],
            img2: listThumbnail[previous]
        })
    }
    const preSlide = () => {
        slideRef.current?.goBack()
    }
    const nextSlide = () => {
        slideRef.current?.goNext()
    }


    return (

        <div className="header-home">
            <div className="header-home__content" >

                <div className="slide-container z-index1 margrinInTabletMobile">
                    <div className="hideInPC hideInMobile showInTablet">
                        <NavBar />
                    </div>
                    <Fade ref={slideRef} duration={10000} loop={true} transitionDuration={2000} arrows={false} onChange={onChange}>
                        <div className="each-fade sizeSlide">
                            <div className="image-container sizeSlide ">
                                <img className="zoomIn sizeSlide" src={listImage[0]} />
                            </div>
                        </div>
                        <div className="each-fade sizeSlide">
                            <div className="image-container sizeSlide">
                                <img className="zoomOut sizeSlide" src={listImage[1]} />
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="opaticy0-65 z-index2">
                    <NavBar />
                    <div className="header-hom__content__slide">
                        <div className="arrow  animation-fadein-0-3" onClick={preSlide}>
                            <i className="fas fa-chevron-left center-flex"></i>
                            <div className="page-imagine animation-fadein-0-3" style={{ backgroundImage: `url(${thumbnail.img1})` }}>
                                <div className=" matchParent page-imagine page-imagine-left  ">
                                    <div className="page-image__content page-image__content-left matchParent ">
                                        <div className="arrow page-image__conten-arrow">
                                            <i className="fas fa-chevron-left center-flex"></i>
                                        </div>
                                        <div className="page-image__conten-text page-image__conten-text-left">S L I D E</div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="header-content__text">
                            <div className="header-content__text_title animation-left-to-center-0-75">{translate('Làm thế nào để đăng ký học?')}</div>
                            <div className="header-content-des animation-top-to-center-0-75">
                                <div className="header-content__text_des">{translate('Welcom to IRICS')}</div>
                                <div className="header-content__text_des" >{translate('Best learning institutions')}</div>
                            </div>
                            <div className="header-content__text_button background-radius_primary animation-fadein-1-delay">{translate('Viện khoa học').toUpperCase()}</div>
                        </div>
                        <div className="arrow  animation-fadein-0-3" onClick={nextSlide}>
                            <i className="fas fa-chevron-right center-flex"></i>

                            <div className="page-imagine page-imagine-right animation-fadein-0-3" style={{ backgroundImage: `url(${thumbnail.img2})` }}>
                                <div className=" matchParent page-imagine page-imagine-right">
                                    <div className="page-image__content matchParent ">
                                        <div className="arrow page-image__conten-arrow">
                                            <i className="fas fa-chevron-right center-flex"></i>
                                        </div>
                                        <div className="page-image__conten-text">S L I D E</div>

                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </div>


    );
}