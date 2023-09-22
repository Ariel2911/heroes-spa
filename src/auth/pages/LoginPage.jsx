import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext(AuthContext)
  const navigate = useNavigate();

  const onLogin = () => {

    login('mar');

    navigate('/', {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <hr />

      <button className="btn btn-prymary" onClick={onLogin}>
        login
      </button>
    </div>
  );
};
