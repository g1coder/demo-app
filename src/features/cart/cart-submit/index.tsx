import {Typography} from '@mui/material';
import {useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import {Routes} from '@shared/constants';
import {RouteHelper} from '@shared/helpers';
import PrimaryButton from '@shared/ui-kit/Button/PrimaryButton';

interface IProps {
  submitCart: () => void;
  submitting: boolean;
  isLoggined: boolean;
}

const CartSubmit = ({submitCart, submitting, isLoggined}: IProps) => {
  const location = useLocation();
  const loginUrl = useMemo(() => `${Routes.SIGN_IN.url}${RouteHelper.getNextUrlString(location)}`, [location]);

  if (isLoggined) {
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
