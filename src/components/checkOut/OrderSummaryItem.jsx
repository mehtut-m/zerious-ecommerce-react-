import defaultImg from '../../assets/images/default-product-img.png';
import { formatThaiCurrency } from '../../services/currencyService';

const OrderSummaryItem = ({ orderItem }) => {
  const { product } = orderItem;

  const orderItemAmount = orderItem.amount * product.price;
  return (
    <li className="flex flex-1 justify-between items-center py-5 border-b border-gray-200">
      <div className="order-item-img-container h-16 w-16 md:h-24 md:w-24">
        <img
          src={
            product?.productImg?.length > 0
              ? product.productImg[0].productImg
              : defaultImg
          }
          alt=""
          className="h-full w-full rounded-md"
        />
      </div>
      <div className="order-item-info ml-8 h-full flex flex-col flex-grow">
        <h3 className="font-semibold">{product.name}</h3>
        <span className="min-w-max block fle">x {orderItem.amount}</span>
        <span className="block mt-3 ml-auto w-max">
          {formatThaiCurrency(orderItemAmount)}
        </span>
      </div>
    </li>
  );
};

export default OrderSummaryItem;
