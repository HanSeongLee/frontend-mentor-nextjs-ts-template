import React from 'react';
import styles from './style.module.scss';
import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useActivityParams, useLoaderData } from '@stackflow/react/future';
import { articleLoader } from '@/activities/ArticleActivity/loader';
import ArticleCard from '@/components/ArticleCard';

const ArticleActivity: ActivityComponentType<'ArticleActivity'> = () => {
    const { title } = useActivityParams<"ArticleActivity">();
    const { imageUrl, recommenderCards } = useLoaderData<typeof articleLoader>();

    return (
        <AppScreen appBar={{}}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <div className={styles.imageInner}>
                        <LazyLoadImage src={imageUrl}
                                       effect={'opacity'}
                                       width={'100%'}
                                       height={'100%'}
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.subtitle}>
                        Baby & Kids ∙ 3 days ago
                    </div>
                    <div className={styles.body}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                        elementum sit sem ullamcorper urna, lacinia eu tortor, mattis.
                        Venenatis ut cursus amet in.
                    </div>
                    <div className={styles.subtitle}>
                        1 chats ∙ 2 favorites ∙ 212 views
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>
                        Other Items by Emila
                    </div>
                    <div className={styles.recommenderGrid}>
                        {recommenderCards.map((card) => (
                            <ArticleCard key={card.articleId}
                                         {...card}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AppScreen>
    );
};

export default ArticleActivity;
