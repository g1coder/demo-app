import React, {ReactElement} from 'react';
import {Navigate} from 'react-router-dom';
import AppRoutes from 'core/constants/AppRoutes';

interface IProps {
  isAllowed: boolean;
  redirectPath?: string;
  children?: ReactElement;
}

const ProtectedRoute = (props: IProps) => {
  const {isAllowed, children, redirectPath = AppRoutes.LOGIN.url} = props;
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedRoute;
