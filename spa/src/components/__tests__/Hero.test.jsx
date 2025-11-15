/* eslint-env jest */
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders hero media elements', () => {
    const { container } = render(<Hero />);

    const backgroundVideo = container.querySelector('video');

    expect(backgroundVideo).toBeInTheDocument();
    expect(backgroundVideo.autoplay).toBe(true);
    expect(backgroundVideo.muted).toBe(true);
    expect(backgroundVideo.loop).toBe(true);
    expect(backgroundVideo.playsInline).toBe(true);
    expect(backgroundVideo).toHaveAttribute('preload', 'auto');

    expect(
      screen.getByRole('img', {
        name: /кузов автомобиля после детального ремонта в неоновом освещении/i,
      }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
