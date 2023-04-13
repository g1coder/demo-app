import {useContext, useMemo, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Typography} from '@mui/material';
import PrimaryButton from 'shared/ui/Button/PrimaryButton';
import AppContext, {IAppContext} from 'shared/lib/AppContext';
import AppRoutes from 'shared/constants/AppRoutes';
import Utils from 'shared/core/services/Utils';

interface IProps {
  submitCart: () => void;
}

const CartSubmit = ({submitCart}: IProps) => {
  const location = useLocation();
  const {user} = useContext<IAppContext>(AppContext);
  const loginUrl = useMemo(() => `${AppRoutes.LOGIN.url}${Utils.getNextUrlString(location)}`, [location]);
  const [submitting, setSubmitting] = useState(false);

  if (user) {
    return <PrimaryButton title="Checkout" onClick={submitCart} disabled={submitting} />;
  }

  return (
    <>
      <Typography variant="body1" color="primary.dark">
        Log in to submit your cart
      </Typography>
      <Typography
        variant="body2"
        color="primary.dark"
        sx={{cursor: 'pointer', textDecoration: 'underline'}}
        component="a"
        href={loginUrl}
      >
        Sign in
      </Typography>
    </>
  );
};

export default CartSubmit;
