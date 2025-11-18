/* eslint-env jest */
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders hero media elements with responsive hooks', () => {
    const { container } = render(<Hero />);

    const backgroundWrapper = container.querySelector('.hero__background');
    expect(backgroundWrapper).toBeInTheDocument();

    const backgroundVideo = container.querySelector('video');

    expect(backgroundVideo).toBeInTheDocument();
    expect(backgroundVideo.autoplay).toBe(true);
    expect(backgroundVideo.muted).toBe(true);
    expect(backgroundVideo.loop).toBe(true);
    expect(backgroundVideo.playsInline).toBe(true);
    expect(backgroundVideo).toHaveAttribute('preload', 'auto');

    const artwork = screen.getByRole('img', {
      name: /кузов автомобиля после детального ремонта в неоновом освещении/i,
    });

    expect(artwork).toBeInTheDocument();
    expect(container.querySelector('.hero__image-wrapper')).toContainElement(artwork);
    expect(artwork).toHaveClass('hero__artwork');

    expect(container).toMatchSnapshot();
  });
});
