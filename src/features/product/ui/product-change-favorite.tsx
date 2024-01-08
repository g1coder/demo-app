import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useProductChangeFavorite as useProductFavorite} from '@features/product';
import {IBaseProduct} from '@entities/product';

interface IProps {
  productId: IBaseProduct['id'];
  isFavorite?: boolean;
}

export const ProductChangeFavorite = ({productId, isFavorite}: IProps) => {
  const toggleFavorite = useProductFavorite(productId);

  return (
    <div style={{position: 'absolute'}} onClick={() => toggleFavorite.mutate(isFavorite ? 'remove' : 'add')}>
      {isFavorite ? (
        <FavoriteIcon color="primary" fontSize="large" />
      ) : (
        <FavoriteBorderIcon color="primary" fontSize="large" />
      )}
    </div>
  );
};
