'use client';

import React from 'react';
import { Stack } from '@/stackflow';
import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/dist/client/components/navigation';

interface IClientStackProps {

}

const ClientStack: React.FC<IClientStackProps> = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return (
        <Stack initialContext={{
            req: {
                path: `${pathname}${searchParams.size > 0 ? `?${searchParams.toString()}` : ''}`,
            },
        }}
        />
    );
};

export default ClientStack;
