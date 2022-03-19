import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

it('should render button', () => {
    render(<App />);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
});
