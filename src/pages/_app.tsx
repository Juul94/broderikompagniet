import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/system';
import theme from '../theme/baseThemeOptions';
import '../styles/globals.css';
import LoginPage from './login';
import Layout from 'src/components/layout/layout';

type EnhancedAppProps = AppProps & {
    Component: NextPage<PageProps>;
};

type PageProps = {
    onLogout: () => void;
};

const App: React.FC<EnhancedAppProps> = ({ Component, pageProps }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');

        if (isAuthenticated === 'true') {
            setLoggedIn(true);
        }

        setLoading(false);
    }, []);

    const handleLogin = () => {
        localStorage.setItem('isAuthenticated', 'true');
        setLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        setLoggedIn(false);
    };

    if (loading) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            {loggedIn ? (
                <Layout>
                    <Component {...pageProps} onLogout={handleLogout} />
                </Layout>
            ) : (
                <LoginPage onLogin={handleLogin} />
            )}
        </ThemeProvider>
    );
};

export default App;
