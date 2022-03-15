import { Link } from "react-router-dom";
import DetailProductPage from 'components/ProductPage/DetailProductPage';

export const ProductoItem = ({title, image, category, price, id}) => {
  return (
    
    <div key={id} className="producto">
      <Link to={`/producto/${id}`}>
      <div className="producto__img">
        <img src={image} alt={title} />
      </div>
      </Link>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price} </p>
      </div>
      <div className="bottom">
        <div>
        <Link to={{
          pathname: `/producto/${id}`,
          
        }} className="btn">Ver detalles</Link>
        </div>
      </div>
    </div>
  );
};
