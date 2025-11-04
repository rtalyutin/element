import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders hero headline and actions', () => {
    const { container } = render(<Hero />);

    expect(
      screen.getByRole('heading', { name: /мастерская мятый элемент/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('group', { name: /действия геро-блока/i }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
