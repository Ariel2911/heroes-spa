import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes';

describe('Pruebas en <SearchPage />', () => {
  test('debe mostrarse correctamente con valores por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    // screen.debug();

    expect(container).toMatchSnapshot();
  });
});
