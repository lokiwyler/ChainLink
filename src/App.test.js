// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainLink/i);
    expect(titleElement).toBeInTheDocument();
});
