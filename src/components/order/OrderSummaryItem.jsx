import defaultImg from '../../assets/images/default-product-img.png';

const OrderSummaryItem = () => {
  return (
    <li className="flex flex-1 justify-between items-center py-5 border-b border-gray-200">
      <div className="order-item-img-container h-16 w-16">
        <img src={defaultImg} alt="" className="h-full w-full rounded-md" />
      </div>
      <div className="order-item-info px-2 h-full flex flex-col">
        <div className="order-item-info-title flex justify-between items-center">
          <h3>RK68 White Wireless Gaming Keyboard</h3>
          <span className="ml-5 min-w-max block">x 1</span>
        </div>
        <span className="block mt-3 ml-auto w-max">฿ 1900</span>
      </div>
    </li>
  );
};

export default OrderSummaryItem;
