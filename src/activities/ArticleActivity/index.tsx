import React from 'react';
import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';

const ArticleActivity: ActivityComponentType<'ArticleActivity'> = () => {
    return (
        <AppScreen>
            <div>
                ArticleActivity
            </div>
        </AppScreen>
    );
};

export default ArticleActivity;
