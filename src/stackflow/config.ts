import { defineConfig } from '@stackflow/config';
import { mainActivityLoader } from '@/activities/MainActivity/loader';

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
        }
    ],
    transitionDuration: 270,
    initialActivity: () => "MainActivity",
});
