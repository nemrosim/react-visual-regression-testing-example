import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

it('should render button', () => {
    render(<Button />);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
});

it('should render component onClick', () => {
    render(<Button />);
    fireEvent.click(screen.getByText('Hello world'));
    expect(screen.getByText('Hello')).toBeInTheDocument();
});
