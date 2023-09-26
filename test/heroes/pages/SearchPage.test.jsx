import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes';

describe('Pruebas en <SearchPage />', () => {
  test('debe mostrarse correctamente con valores por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test('debe mostrar a Batman y el input con el valor del queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    );

    // screen.debug();

    const input = screen.getByRole('textbox');

    expect(input.value).toBe('batman');

    const img = screen.getByRole('img');

    expect(img.src).toContain('/heroes/dc-batman.jpg');

    const alertDanger = screen.getByLabelText('alert-danger');

    expect(alertDanger.style.display).toBe('none');
  });
});
