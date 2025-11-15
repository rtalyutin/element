import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

describe('Visualizations route', () => {
  it('renders four visualization blocks', () => {
    render(
      <MemoryRouter initialEntries={['/visualizations']}>
        <App />
      </MemoryRouter>,
    );

    const blocks = screen.getAllByTestId('visualizations-card');
    expect(blocks).toHaveLength(4);
  });
});
