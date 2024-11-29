import { stackflow } from '@stackflow/react/future';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { config } from '@/stackflow/config';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import MainActivity from '@/activities/MainActivity';
import ArticleActivity from '@/activities/ArticleActivity';

export const { Stack, actions } = stackflow({
    config,
    components: {
        MainActivity,
        ArticleActivity,
    },
    plugins: [
        basicRendererPlugin(),
        basicUIPlugin({
            theme: 'cupertino',
        }),
        historySyncPlugin({
            config,
            fallbackActivity: () => 'MainActivity',
        }),
    ],
});
