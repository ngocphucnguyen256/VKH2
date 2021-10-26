import * as React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { translate } from '../../../../i18n/index';
import listBlog from './LastesBlogData';
import LatestBlogItem from './LatestBlogItem';
import './index.css'
export interface LatestBlogProps {
}

export default function LatestBlog(props: LatestBlogProps) {
    return (
        <div className="latest-blog">
            <div className="grid wide">
                <div className="latest-blog__block">
                    <div className="latest-blog__title">{translate('Latest Blog')}</div>
                    <div className="lastest-blog__des">{translate('Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas.')}</div>
                    <div className="lastest-blog__slide">
                        <ScrollMenu>
                            {listBlog.map((item, index) => (
                                <LatestBlogItem {...item} />
                            ))}
                        </ScrollMenu>
                    </div>
                </div>

            </div>
        </div>
    );
}
