import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './nav';

const Layout = () => {
    return (
        <>
            <Nav/>
            <div>

                <Outlet />

            </div>
            <div> Footer</div>







        </>
    );
}

export default Layout;
