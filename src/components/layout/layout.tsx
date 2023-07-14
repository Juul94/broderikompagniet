import React from 'react';
import Header from 'src/components/layout/header';
import Footer from 'src/components/layout/footer';
import { Content } from '../../styles/styledDiv';

export const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />
            <Content>{children}</Content>
            <Footer />
        </>
    );
};

export default Layout;
