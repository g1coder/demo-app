import {useContext} from 'react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {AuthContext, IAuthContext} from '@widgets/auth';
import {Routes} from "@shared/constants";
import {RouteHelper} from "@shared/helpers";

const PrivateRoute = () => {
  const location = useLocation();
  const {user} = useContext<IAuthContext>(AuthContext);

  return user ? <Outlet /> : <Navigate to={`${Routes.SIGN_IN.url}${RouteHelper.getNextUrlString(location)}`} replace />;
};

export default PrivateRoute;
