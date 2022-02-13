import { Link } from 'react-router-dom';
import defaultProduct from '../../assets/images/default-product-img.png';

const ProductItem = ({ product }) => {
  console.log(product);
  return (
    <div className="card rounded-md border p-4 bg-white  w-[300px] inline-block hover:border-primary shadow">
      <Link to="/product/1">
        <img src={defaultProduct} alt="" />
        <div className="card-body mt-4">
          <h6 className="mb-8 line-clamp-2">
            Neolution E-sport Newtron G920 Economy Gaming Chair
          </h6>
          <p className="text-xl font-medium">฿ 1,990.00</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
