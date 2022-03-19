import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../Button';

export const App = () => {
    return (
        <ThemeProvider theme={{}}>
            <Button />
        </ThemeProvider>
    );
};
