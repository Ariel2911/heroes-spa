import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => {

  const user = {
    id: 'ABC',
    name: 'Ariel'
  }

  const initialState = {
    logged: true,
    user
  }

  test('debe retornar el estado por defecto', () => {
    const newState = authReducer(initialState,{});

    expect(newState).toBe(initialState);

  });

  test('debe llamar la ación "login", pasar el logged a true y establecer el user', () => {
    const action = {
      type: types.login,
      payload: user
    };

    const newState = authReducer({ logged: false }, action)

    expect(newState).toEqual({ logged: true, user })

  });
})