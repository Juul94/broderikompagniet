/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    distDir: 'build',
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
    webpackDevMiddleware: (config) => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        };
        return config;
    },
    module: {
        loaders: [{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }],
    },
    experimental: {
        modularizeImports: {
            lodash: {
                transform: 'lodash/{{member}}',
            },
            '@mui/material': {
                transform: '@mui/material/{{member}}',
            },
            '@mui/lab': {
                transform: '@mui/lab/{{member}}',
            },
            '@mui/icons-material/?(((\\w*)?/?)*)': {
                transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}',
            },
        },
    },
};

// Check if running on GitHub Actions
if (process.env.GITHUB_ACTIONS === 'true') {
    // Apply configurations specific to GitHub
    nextConfig.basePath = '/broderikompagniet';
    nextConfig.images = {
        unoptimized: true,
    };
}

module.exports = nextConfig;
