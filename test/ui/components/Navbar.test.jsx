import { render, screen, fireEvent } from '@testing-library/react';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui';
import { MemoryRouter } from 'react-router-dom';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('Pruebas en <Navbar />', () => {
  const contextValue = {
    logged: true,
    user: {
      id: '123',
      name: 'Fer',
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test('debe mostrar el nombre del usuario', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Fer')).toBeTruthy();
  });

  test('debe llamar el logout y navigate cuando se hace click en el botón', () => {
    // const {} = renderHook

    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const logoutBtn = screen.getByRole('button');

    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalled();

    expect(mockUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
