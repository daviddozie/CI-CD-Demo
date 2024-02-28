// Header.vitest.js
import { render } from 'vitest-react';
import Header from '../src/components/Header';

describe('Header Component', () => {
  it('renders the Header component', () => {
    const { getByText } = render(<Header />);
    const headerElement = getByText('Header');
    expect(headerElement).toBeDefined();
  });
});
