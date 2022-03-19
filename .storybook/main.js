module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-create-react-app',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'storybook-builder-vite',
    },
    viteFinal: (config) => {
        config.plugins = [...config.plugins];
        if (process.env.NODE_ENV === 'production') {
            return config;
        }
        /*
            Fixes "Uncaught ReferenceError: global is not defined" issue
            on storybook start
         */
        return {
            ...config,
            define: {
                ...config.define,
                global: 'window',
            },
        };
    },
};
