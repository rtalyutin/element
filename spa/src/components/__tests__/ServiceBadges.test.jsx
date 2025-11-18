/* eslint-env jest */
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ServiceBadges from '../ServiceBadges';
import services from '../../data/services';

describe('ServiceBadges', () => {
  it('renders a badge for every service entry', () => {
    const { container } = render(
      <MemoryRouter>
        <ServiceBadges />
      </MemoryRouter>,
    );

    const badges = container.querySelectorAll('.service-badge');

    expect(badges).toHaveLength(services.length);
  });
});
