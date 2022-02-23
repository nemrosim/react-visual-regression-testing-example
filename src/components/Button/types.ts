import {
    BordersProps,
    ColorProps,
    LayoutProps,
    OpacityProps,
    ShadowProps,
    SpaceProps,
    TypographyProps,
} from 'styled-system';
import { ButtonHTMLAttributes } from 'react';

export type ButtonStyleProps = BordersProps &
    ColorProps &
    ShadowProps &
    SpaceProps &
    TypographyProps &
    OpacityProps &
    LayoutProps &
    ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends ButtonStyleProps {
    variant?: 'primary' | 'secondary';
}
