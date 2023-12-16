import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';

const Navigation = () => {
    return (
        <div role="presentation"
            style={{ height: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Breadcrumbs separator="" aria-label="breadcrumb" style={{ display: 'flex', justifyContent: 'center' }}>
                <Link  paddingRight="5vw" underline="hover" color='black' href="/">
                    Home
                </Link>
                <Link paddingLeft="5vw" paddingRight="5vw" underline="hover" color='black' href="/how-it-works">
                    How it works
                </Link>
                <Link paddingLeft="5vw" underline="hover" color='black' href="/author">
                    Author
                </Link>
            </Breadcrumbs>
        </div>
    );
};

export default Navigation;
