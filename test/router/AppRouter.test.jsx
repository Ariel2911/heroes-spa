import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en <AppRouter />', () => {
  test('debe mostrar el login si no está autenticado', () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getAllByText('Login').length).toBe(1);

    expect(screen.getByRole('button', { name: 'login' })).toBeTruthy();
  });

  test('debe morstar el componente de Marvel si está autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        id: '123',
        name: 'Fer',
      },
    };

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    // screen.debug();

    expect(screen.getByRole('heading', { name: 'Marvel Comics' })).toBeTruthy();
  });
});
