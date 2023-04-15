import {useContext} from 'react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {AuthContext, IAuthContext} from '@widgets/auth/lib/AuthContext';

const PrivateRoute = () => {
  const location = useLocation();
  const {user} = useContext<IAuthContext>(AuthContext);

  return user ? <Outlet /> : <Navigate to="/login" state={{from: location}} replace />;
};

export default PrivateRoute;
