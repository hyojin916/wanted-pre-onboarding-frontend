import { Outlet, Navigate } from 'react-router-dom';

const PublicRoute = () => {
  const access_token = localStorage.getItem('access_token');
  let auth = { token: !!access_token };
  return auth.token ? <Navigate to='/todo' /> : <Outlet />;
};

export default PublicRoute;
