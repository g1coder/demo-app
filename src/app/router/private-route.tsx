import {useContext} from 'react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {Routes} from '@shared/constants';
import {getNextUrlString} from '@shared/utils';
import {AuthContext, IAuthContext} from '@features/authorization';

const PrivateRoute = () => {
  const location = useLocation();
  const {user} = useContext<IAuthContext>(AuthContext);
  return user ? <Outlet /> : <Navigate to={`${Routes.SIGN_IN.url}${getNextUrlString(location)}`} replace />;
};

export default PrivateRoute;
