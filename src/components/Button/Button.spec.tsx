import React from 'react';
import { render, screen } from '@testing-library/react';
import { generateImage, setDefaultOptions } from 'jsdom-screenshot';
import { Button, hovered } from './Button';
import styled from 'styled-components';
import userEvent from '@testing-library/user-event';

setDefaultOptions({
    launch: {
        executablePath: process.env.CI === 'true' ? '/usr/bin/chromium-browser' : undefined,
        // TravisCI and Linux OS require --no-sandbox to be able to run the tests
        // https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-on-travis-ci
        args: process.env.CI === 'true' ? ['--no-sandbox'] : [],
    },
});

// give tests more time as taking screenshots takes a while
jest.setTimeout(10000);

describe.each([
    {
        width: 400,
        height: 100,
    },
    {
        width: 200,
        height: 60,
    },
])('should render Button component for %s', ({ width, height }) => {
    it('default state', async () => {
        render(<Button />);

        const screenshot = await generateImage({
            launch: {
                defaultViewport: {
                    width,
                    height,
                },
            },
        });
        expect(screenshot).toMatchImageSnapshot();
    });

    it('clicked state', async () => {
        render(<Button />);

        expect(screen.queryByText('Hello')).not.toBeInTheDocument();

        userEvent.click(screen.getByText('Hello world'));

        expect(screen.getByText('Hello')).toBeInTheDocument();

        const screenshot = await generateImage({
            launch: {
                defaultViewport: {
                    width,
                    height: 100,
                },
            },
        });
        expect(screenshot).toMatchImageSnapshot();
    });

    it('hovered state', async () => {
        // Using styled-components hovered color will not be updated
        const HoveredButton = styled(Button)`
            ${hovered}
        `;
        render(<HoveredButton />);

        const screenshot = await generateImage({
            launch: {
                defaultViewport: {
                    width,
                    height,
                },
            },
        });
        expect(screenshot).toMatchImageSnapshot();
    });
});
