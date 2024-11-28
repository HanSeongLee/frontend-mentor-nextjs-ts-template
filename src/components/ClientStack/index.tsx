'use client';

import React from 'react';
import { Stack } from '@/stackflow';
import { usePathname } from 'next/navigation';

interface IClientStackProps {
    params: any;
}

const ClientStack: React.FC<IClientStackProps> = ({ params }) => {
    const pathname = usePathname();
    return (
        <Stack initialContext={{
            req: {
                path: pathname,
            },
            pageProps: params,
        }}
        />
    );
};

export default ClientStack;
