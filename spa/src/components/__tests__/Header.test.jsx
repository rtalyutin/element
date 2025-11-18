/* eslint-env jest */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';

const renderHeader = (initialEntries) =>
  render(
    <MemoryRouter initialEntries={initialEntries}>
      <Header />
    </MemoryRouter>,
  );

describe('Header navigation state', () => {
  it('marks anchor links as active when their hash matches the current section', () => {
    renderHeader(['/#pricing']);

    const pricingLink = screen.getByRole('link', { name: 'Цены' });
    const galleryLink = screen.getByRole('link', { name: 'Галерея' });

    expect(pricingLink).toHaveClass('header__link--active');
    expect(galleryLink).not.toHaveClass('header__link--active');
  });

  it('activates the gallery route and resets anchor states when leaving home', () => {
    renderHeader(['/gallery']);

    const galleryLink = screen.getByRole('link', { name: 'Галерея' });
    const contactsLink = screen.getByRole('link', { name: 'Контакты' });

    expect(galleryLink).toHaveClass('header__link--active');
    expect(contactsLink).not.toHaveClass('header__link--active');
  });
});
