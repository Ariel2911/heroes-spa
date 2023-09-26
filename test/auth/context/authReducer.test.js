import { authReducer } from "../../../src/auth/context/authReducer"

describe('Pruebas en authReducer', () => {

  const initialState = {
    logged: true,
    user: {
      id: 'ABC',
      name,
    }
  }

  test('debe retornar el estado por defecto', () => {
    const newState = authReducer(initialState,{});

    expect(newState).toBe(initialState);
    
  })
})