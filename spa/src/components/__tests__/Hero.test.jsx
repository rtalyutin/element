/* eslint-env jest */
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders hero headline and actions', () => {
    const { container } = render(<Hero />);

    expect(
      screen.getByRole('heading', { name: /мятый элемент кузовной ремонт/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/мастерская/i)).toBeInTheDocument();
    expect(
      screen.getByRole('group', { name: /действия геро-блока/i }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
