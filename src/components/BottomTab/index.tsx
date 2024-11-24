import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import IconHome from '@/assets/icons/IconHome';
import IconMenu from '@/assets/icons/IconMenu';
import IconSell from '@/assets/icons/IconSell';
import IconChatting from '@/assets/icons/IconChatting';
import IconProfile from '@/assets/icons/IconProfile';

interface IBottomTabProps extends HTMLAttributes<HTMLDivElement> {

}

const BottomTab: React.FC<IBottomTabProps> = ({ children, ...props }) => {
    return (
        <div className={styles.bottomTab}
             {...props}
        >
            <button className={styles.button}
                    type={'button'}
            >
                <div className={styles.buttonIcon}>
                    <IconHome />
                </div>
                <div className={styles.buttonLabel}>
                    Home
                </div>
            </button>
            <button className={styles.button}
                    type={'button'}
            >
                <div className={styles.buttonIcon}>
                    <IconMenu />
                </div>
                <div className={styles.buttonLabel}>
                    Categories
                </div>
            </button>
            <button className={styles.button}
                    type={'button'}
            >
                <div className={styles.buttonIcon}>
                    <IconSell />
                </div>
                <div className={styles.buttonLabel}>
                    Sell
                </div>
            </button>
            <button className={styles.button}
                    type={'button'}
            >
                <div className={styles.buttonIcon}>
                    <IconChatting />
                </div>
                <div className={styles.buttonLabel}>
                    Chats
                </div>
            </button>
            <button className={styles.button}
                    type={'button'}
            >
                <div className={styles.buttonIcon}>
                    <IconProfile />
                </div>
                <div className={styles.buttonLabel}>
                    My
                </div>
            </button>
        </div>
    );
};

export default BottomTab;
