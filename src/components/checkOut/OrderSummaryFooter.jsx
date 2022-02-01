import { formatThaiCurrency } from '../../services/currencyService';
import Button from '../Button';

const OrderSummaryFooter = ({ cart }) => {
  const { cartItems } = cart;
  const subTotal = cartItems.reduce((acc, { amount, product: { price } }) => {
    return acc + amount * price;
  }, 0);

  const discount = 0;
  const shipping = 20;

  return (
    <div className="px-2">
      <div className="flex flex-1 justify-between items-center my-2">
        <span>Sub Total</span>
        <span>{formatThaiCurrency(subTotal)}</span>
      </div>
      <div className="flex flex-1 justify-between items-center my-2">
        <span>Shipping</span>
        <span>{formatThaiCurrency(shipping)}</span>
      </div>
      <div className="flex flex-1 justify-between items-center my-2">
        <span>Discount</span>
        <span className="text-red-500">{formatThaiCurrency(discount)}</span>
      </div>
      <div className="flex flex-1 justify-between items-center py-2 border-t mb-5">
        <span>Grand Total</span>
        <span>{formatThaiCurrency(subTotal + shipping + discount)}</span>
      </div>
    </div>
  );
};

export default OrderSummaryFooter;
