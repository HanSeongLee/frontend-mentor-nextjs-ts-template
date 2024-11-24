import React from 'react';
import styles from './style.module.scss';
import { useFlow } from '@stackflow/react/future';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface FeedCardProps {
    articleId: string;
    title: string;
    region: string;
    price: number;
    daysAgo: number;
}
const FeedCard: React.FC<FeedCardProps> = ({
                                               articleId,
                                               title,
                                               price,
                                               region,
                                               daysAgo,
                                           }) => {
    const { push } = useFlow();

    const imageUrl = `https://picsum.photos/800/800/?id=${articleId}`;

    const onClick = () => {
        push('ArticleActivity', {
            articleId: String(articleId),
            title,
        });
    };

    return (
        <div className={styles.container}>
            <button type="button" className={styles.button} onClick={onClick}>
                <div className={styles.thumbnail}>
                    <LazyLoadImage
                        src={imageUrl}
                        effect="opacity"
                        width={108}
                        height={108}
                    />
                </div>
                <div className={styles.right}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.subtitle}>
                        {region} · {daysAgo} day ago
                    </div>
                    <div className={styles.price}>£{price}.00</div>
                </div>
            </button>
        </div>
    );
};

export default FeedCard;
