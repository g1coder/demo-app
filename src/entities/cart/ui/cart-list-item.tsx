import {Divider, Grid, Typography} from '@mui/material';
import {ICartItem} from '../types';
import {StyledProductImage} from './styles';

interface IProps {
  item: ICartItem;
}

export const CartListItem = ({item}: IProps) => {
  return (
    <>
      <Grid item container justifyContent="space-between" spacing={2} columns={{xs: 12, sm: 12, md: 12, xl: 12}}>
        <Grid item xs={3} sm={6} container>
          <Grid item xs={3}>
            <StyledProductImage src={item.image} />
          </Grid>
          <Grid
            item
            xs={9}
            sx={{margin: 'auto 0', flexFlow: 'row wrap'}}
            textAlign="left"
            padding={1}
            display={{xs: 'none', md: 'flex'}}
          >
            <Typography variant="h6" color="primary.dark">
              {item.name}
            </Typography>
            <Typography variant="body1" color="primary.light" display={{xs: 'none', xl: 'flex'}}>
              {item.description}
            </Typography>
          </Grid>
        </Grid>

        {[`$${item.price}`, item.count, `$${(item.price * item.count).toFixed(2)}`].map((value, index) => (
          <Grid key={`${index}-${value}`} item xs={2} textAlign="right" margin="auto">
            <Typography variant="h6" color="primary.dark">
              {value}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Divider />
    </>
  );
};
