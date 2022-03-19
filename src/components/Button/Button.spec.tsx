import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

it('should render button', () => {
    render(<Button />);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
});
