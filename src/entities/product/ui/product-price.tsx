import {Typography} from '@mui/material';

interface IProps {
  price: number;
  discount: number | undefined;
}

export const ProductPrice = ({price, discount}: IProps) => {
  if (!discount) {
    return (
      <Typography variant="h4" color="primary.light" sx={{marginTop: 3}}>
        {`$${price}`}
      </Typography>
    );
  }

  return (
    <div>
      <del>
        <Typography variant="body1" color="text.secondary">
          {`$${price}`}
        </Typography>
      </del>
      <Typography variant="h4" color="secondary.main" sx={{marginLeft: 1}}>
        {`$${discount}`}
      </Typography>
    </div>
  );
};
