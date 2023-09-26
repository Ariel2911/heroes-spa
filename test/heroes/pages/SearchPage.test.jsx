import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Navigate } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Pruebas en <SearchPage />', () => {
  beforeEach(() => jest.clearAllMocks());

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

  test('debe mostrar un error si no se encuentra el heroe (batman123)', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage />
      </MemoryRouter>
    );

    // screen.debug();

    const alertDanger = screen.getByLabelText('alert-danger');

    expect(alertDanger.style.display).toBe('');
  });

  test('debe llamar el navigate a la pantalla nueva', () => {
    const inputValue = 'superman';
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    // screen.debug();

    const input = screen.getByRole('textbox');

    fireEvent.change(input, {
      target: { name: 'searchText', value: inputValue },
    });

    const form = screen.getByLabelText('form');

    fireEvent.submit(form);

    expect(mockNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
  });
});
