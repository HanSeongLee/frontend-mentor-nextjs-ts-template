import React from 'react';
import styles from './style.module.scss';
import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { AppBar } from '@/activities/MainActivity/app-bar';
import BottomTab from '@/components/BottomTab';
import { mainActivityLoader } from '@/activities/MainActivity/loader';
import { useLoaderData } from '@stackflow/react/future';
import FeedCard from '@/components/FeedCard';

const MainActivity: ActivityComponentType<"MainActivity"> = () => {
    const { cards } = useLoaderData<typeof mainActivityLoader>();

    return (
        <AppScreen appBar={AppBar}>
            <div className={styles.wrapper}>
                <div className={styles.scrollable}>
                    {cards.map((card) => (
                        <FeedCard key={card.articleId} {...card} />
                    ))}
                </div>
                <div>
                    <BottomTab />
                </div>
            </div>
        </AppScreen>
    );
};

export default MainActivity;
