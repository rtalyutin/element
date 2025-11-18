import { render } from '@testing-library/react';
import Gallery from '../Gallery';
import services from '../../data/services';

describe('Gallery', () => {
  it('renders a section for every service entry', () => {
    const { container } = render(<Gallery />);

    const sections = container.querySelectorAll('.gallery__section');

    expect(sections).toHaveLength(services.length);
  });
});
