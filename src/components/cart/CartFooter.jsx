import { formatThaiCurrency } from '../../services/currencyService';

const CartFooter = ({ cartItems }) => {
  console.log(cartItems);
  const subTotal = cartItems.reduce((sum, item) => {
    console.log(item);
    return item.product.price * item.amount + sum;
  }, 0);
  return (
    <div className="grid grid-cols-2">
      <h4 className="text-lg">Sub Total</h4>
      <p className="text-lg text-right">{`฿ ${formatThaiCurrency(
        subTotal
      )}`}</p>
    </div>
  );
};

export default CartFooter;
