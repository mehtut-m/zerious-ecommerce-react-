import BreadCrumb from '../components/BreadCrumb';
import AddressSelection from '../components/order/AddressItems';
import OrderSummary from '../components/order/OrderSummary';
import OrderSummaryFooter from '../components/order/OrderSummaryFooter';

const Checkout = () => {
  return (
    <main className="container ">
      <div className="">
        <BreadCrumb />
        <AddressSelection />
        <OrderSummary />
        <OrderSummaryFooter />
      </div>
    </main>
  );
};

export default Checkout;
