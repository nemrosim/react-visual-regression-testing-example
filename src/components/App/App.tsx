import React from 'react';
import { ThemeProvider } from 'styled-components';

export const App = () => {
    return (
        <ThemeProvider theme={{}}>
            <div>Hello</div>
        </ThemeProvider>
    );
};
