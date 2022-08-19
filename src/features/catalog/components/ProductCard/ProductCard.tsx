import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IBaseProduct from 'features/catalog/models/IBaseProduct';
import {StyledContainer} from 'features/catalog/components/ProductCard/ProductCardStyles';
import {memo} from 'react';

interface IProps {
  item: IBaseProduct;
}

const ProductCard = (props: IProps) => {
  return <StyledContainer>Z</StyledContainer>;
};

export default memo(ProductCard);

// export default function BasicCard() {
//   return (
//     <Card sx={{minWidth: 275}}>
//       <CardContent>
//         <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography sx={{mb: 1.5}} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
