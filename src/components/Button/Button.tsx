import React, { forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps } from './types';

export const hovered = css`
    background: #c10d0d;
`;

export const StyledButton = styled.button<ButtonProps>`
    background-color: initial;
    background-image: linear-gradient(-180deg, #fcd602, #00bd68);
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
    color: #000000;
    cursor: pointer;
    display: inline-block;
    font-family: Inter, -apple-system, system-ui, Roboto, 'Helvetica Neue', Arial, sans-serif;
    height: 44px;
    line-height: 44px;
    outline: 0;
    overflow: hidden;
    padding: 0 20px;
    pointer-events: auto;
    position: relative;
    text-align: center;
    touch-action: manipulation;
    user-select: none;
    vertical-align: top;
    white-space: nowrap;
    width: 100%;
    z-index: 9;
    border: 0;

    &:hover {
        ${hovered}
    }
`;

const Div = styled.div`
    tab-size: 4;
    line-height: 1.6;
    font-family: -apple-system, Helvetica Neue, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
        Open Sans, sans-serif;
    box-sizing: border-box;
    background: #d29f13;
    color: #642f45;
    padding: 5px 10px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 14px;
    text-align: left;
    pointer-events: none;
    z-index: 1;
    display: block;
    visibility: visible;
    margin: 0px;
    inset: 0px auto auto 0px;
    text-align: center;
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, type = 'button', variant = 'primary', ...props }, ref) => {
        const [shouldShowElement, setShouldShowElement] = useState(false);

        return (
            <>
                <StyledButton
                    ref={ref}
                    type={type}
                    variant={variant}
                    onClick={() => {
                        setShouldShowElement(!shouldShowElement);
                    }}
                    {...props}
                >
                    Hello world
                </StyledButton>
                {shouldShowElement && <Div>Hello</Div>}
            </>
        );
    },
);

Button.displayName = 'Button';
