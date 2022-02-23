// this import comes with create-react-app
import '@testing-library/jest-dom';

// This what we need for visual testing
import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });
