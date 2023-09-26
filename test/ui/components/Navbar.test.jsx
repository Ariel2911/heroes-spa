import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui';
import { MemoryRouter } from 'react-router-dom';

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
});
