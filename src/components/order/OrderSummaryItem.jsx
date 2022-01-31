import defaultImg from '../../assets/images/default-product-img.png';
import { formatThaiCurrency } from '../../services/currencyService';

const OrderSummaryItem = ({ orderItem }) => {
  const { product } = orderItem;
  const orderItemAmount = orderItem.amount * product.price;
  return (
    <li className="flex flex-1 justify-between items-center py-5 border-b border-gray-200">
      <div className="order-item-img-container h-16 w-16">
        <img src={defaultImg} alt="" className="h-full w-full rounded-md" />
      </div>
      <div className="order-item-info px-2 h-full flex flex-col">
        <div className="order-item-info-title flex justify-between items-center">
          <h3>{product.name}</h3>
          <span className="ml-3 min-w-max block">x {orderItem.amount}</span>
        </div>
        <span className="block mt-3 ml-auto w-max">
          {formatThaiCurrency(orderItemAmount)}
        </span>
      </div>
    </li>
  );
};

export default OrderSummaryItem;
