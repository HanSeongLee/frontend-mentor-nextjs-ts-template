import { defineConfig } from '@stackflow/config';
import { mainActivityLoader } from '@/activities/MainActivity/loader';
import { articleLoader } from '@/activities/ArticleActivity/loader';

export const config = defineConfig({
    activities: [
        {
            name: "MainActivity",
            path: "/",
            loader: mainActivityLoader,
        },
        {
            name: "ArticleActivity",
            path: "/articles/:articleId",
            loader: articleLoader,
        }
    ],
    transitionDuration: 270,
});
