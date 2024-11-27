'use client';

import React from 'react';
import { Stack } from '@/stackflow';
import { usePathname } from 'next/navigation';

const ClientStack: React.FC = () => {
    const pathname = usePathname();
    return (
        <Stack initialContext={{
            req: {
                path: pathname,
            }
        }} />
    );
};

export default ClientStack;
