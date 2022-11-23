import React, {FC} from 'react';
import classes from "./AuthLayout.module.scss";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export const AuthLayout:FC<AuthLayoutProps> = ({children}) => {
    return (
        <div className={classes.authWrapper}>
            {children}
            <div className={classes.authPoster} />
            <div className={classes.authPoster2} />
        </div>
    );
};

