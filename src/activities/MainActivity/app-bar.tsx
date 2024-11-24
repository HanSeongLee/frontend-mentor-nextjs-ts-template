import React from 'react';
import styles from './style.module.scss';
import IconExpandMore from '@/assets/icons/IconExpandMore';
import IconSearch from '@/assets/icons/IconSearch';
import IconBell from '@/assets/icons/IconBell';

const AppBarLeft = () => (
    <div className={styles.appBarLeft}>
        Woolston
        <div className={styles.leftIcon}>
            <IconExpandMore />
        </div>
    </div>
);

const AppBarRight = () => (
    <div className={styles.appBarRight}>
        <IconSearch />
        <IconBell />
    </div>
);

export const AppBar = {
    renderLeft: AppBarLeft,
    renderRight: AppBarRight,
};
