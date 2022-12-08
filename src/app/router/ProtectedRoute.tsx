import {Navigate, useLocation} from 'react-router-dom';
import AppContext, {IAppContext} from 'app/AppContext';
import {useContext} from 'react';

const ProtectedRoute = ({children}: {children: JSX.Element}) => {
  const location = useLocation();
  const {user} = useContext<IAppContext>(AppContext);
  if (!user) {
    return <Navigate to="/login" state={{from: location}} replace />;
  }
  return children;
};

export default ProtectedRoute;
