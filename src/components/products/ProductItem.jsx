import { Link } from 'react-router-dom';
import defaultProduct from '../../assets/images/default-product-img.png';
import { formatThaiCurrency } from '../../services/currencyService';

const ProductItem = ({ product }) => {
  const { id, name, price, productImg } = product;
  return (
    <div className="card rounded-md border p-4 h-[21.375rem] bg-white w-[200px] xl:w-[250px] block hover:border-primary shadow hover:scale-110 transition-transform">
      <Link to={`/product/${id}`}>
        <img
          src={
            productImg.length > 0 ? productImg[0].productImg : defaultProduct
          }
          alt=""
          className="w-full aspect-square object-contain"
        />

        <div className="card-body mt-2">
          <h6 className="mb-2 font-thin line-clamp-2">{name}</h6>
          <p className="text-lg font-medium">
            {formatThaiCurrency(price) || 'Dummy Price'}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
