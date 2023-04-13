import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface IProps {
  toggleFavorite: () => void;
  isFavorite: boolean;
}

const ProductChangeFavorite = ({toggleFavorite, isFavorite}: IProps) => {
  return (
    <div style={{position: 'absolute'}} onClick={toggleFavorite}>
      {isFavorite ? (
        <FavoriteIcon color="primary" fontSize="large" />
      ) : (
        <FavoriteBorderIcon color="primary" fontSize="large" />
      )}
    </div>
  );
};

export default ProductChangeFavorite;
