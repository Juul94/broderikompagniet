import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Layout from 'src/components/layout/layout';
import { ThemeProvider } from '@mui/system';
import theme from '../theme/baseThemeOptions';
import '../styles/globals.css';

type EnhancedAppProps = AppProps & {
    Component: NextPage;
};

const App: React.FC<EnhancedAppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
};

export default App;
