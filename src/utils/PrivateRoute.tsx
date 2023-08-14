import { Outlet, Navigate } from 'react-router-dom';

// 1. '"react-router-dom"' has no exported member named 'Redirect'.
// 2. switch -> routes
const PrivateRoutes = () => {
  const access_token = localStorage.getItem('access_token');
  let auth = { token: !!access_token };
  return auth.token ? <Outlet /> : <Navigate to='/signin' />;
};

export default PrivateRoutes;
