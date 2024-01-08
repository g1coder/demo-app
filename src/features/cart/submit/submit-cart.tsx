import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Typography} from '@mui/material';
import {Routes} from '@shared/constants';
import {getNextUrlString} from '@shared/utils';
import {PrimaryButton} from '@shared/ui-kit';
import {ErrorService} from '@shared/services';
import {useSubmitCart} from '../api';

interface IProps {
  isLogged: boolean;
}

export const CartSubmit = ({isLogged}: IProps) => {
  const location = useLocation();
  const [isSubmitting, setSubmitting] = useState(false);

  const submitCart = useSubmitCart();

  const onSubmitCart = () => {
    setSubmitting(true);
    return submitCart.mutate(undefined, {
      onError: (error) => {
        ErrorService.defaultHandler(error);
      },
      onSettled: () => {
        setSubmitting(false);
      },
    });
  };

  if (isLogged) {
    return <PrimaryButton title="Checkout" onClick={onSubmitCart} disabled={isSubmitting} />;
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
        href={`${Routes.SIGN_IN.url}${getNextUrlString(location)}`}
      >
        Sign in
      </Typography>
    </>
  );
};
