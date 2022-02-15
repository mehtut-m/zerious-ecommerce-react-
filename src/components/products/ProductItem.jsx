import { Link } from 'react-router-dom';
import defaultProduct from '../../assets/images/default-product-img.png';
import { formatThaiCurrency } from '../../services/currencyService';

const ProductItem = ({ product }) => {
  const { id, name, price, productImg } = product;
  console.log('hi/', product);
  return (
    <div className="card rounded-md border p-4 bg-white  w-[300px] inline-block hover:border-primary shadow">
      <Link to={`/product/${id}`}>
        {/* <div className="max-h-10"> */}
        <img
          src={
            productImg.length > 0 ? productImg[0].productImg : defaultProduct
          }
          alt=""
          className="w-full aspect-square object-contain"
        />
        {/* </div> */}
        <div className="card-body mt-4">
          <h6 className="mb-8 line-clamp-2">{name}</h6>
          <p className="text-xl font-medium">{formatThaiCurrency(price)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
