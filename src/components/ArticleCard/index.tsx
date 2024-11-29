import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import { Link } from '@stackflow/link/future';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface IArticleCardProps extends HTMLAttributes<HTMLDivElement> {
    articleId: string;
    title: string;
    price: number;
}

const ArticleCard: React.FC<IArticleCardProps> = ({ articleId, title, price, className, ...props }) => {
    const imageUrl = `https://picsum.photos/800/800/?id=${articleId}`;

    return (
        <Link activityName={'ArticleActivity'}
              activityParams={{
                  articleId: String(articleId),
                  title
              }}
              className={styles.container}
        >
            <div className={styles.thumbnail}>
                <div className={styles.innerImage}>
                    <LazyLoadImage
                        src={imageUrl}
                        effect="opacity"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.price}>
                £{price}.00
            </div>
        </Link>
    );
};

export default ArticleCard;
