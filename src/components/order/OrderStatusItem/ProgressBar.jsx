import { ReactComponent as OrderPlaced } from '../../../assets/icons/clipboard.svg';
import { ReactComponent as Paid } from '../../../assets/icons/paid.svg';
import { ReactComponent as Shipped } from '../../../assets/icons/shipping.svg';
import { ReactComponent as Completed } from '../../../assets/icons/complete.svg';

const ProgressBar = () => {
  /* Order Status
    ---------------
    - Order PLACED 0%
    - Payment completed 35%
    - Shipment in progress 65%
    - Order Completed 100%
  */
  return (
    <div className="progress-bar-container flex justify-between m-6 relative">
      <div className="progress-status  border-[#2dc258]">
        <OrderPlaced
          fill="#2dc258"
          stroke="#2dc258"
          width={'60px'}
          height={'60px'}
          className="m-auto"
        />
      </div>
      <div className="progress-status border-[#2dc258]">
        <Paid fill="#2dc258" stroke="#2dc258" width={'60px'} height={'60px'} />
      </div>
      <div className="progress-status  border-[#2dc258]">
        <Shipped fill="#2dc258" stroke="#2dc258" width={'60px'} height={60} />
      </div>
      <div className="progress-status  border-[#2dc258] ">
        <Completed
          fill="#2dc258"
          stroke="#2dc258"
          width={'60px'}
          height={'60px'}
        />
      </div>
      {/* Bar */}
      <div
        className="progress-bar w-full absolute h-1 bg-[#2dc258] z-0"
        style={{ top: '50%' }}
      ></div>
    </div>
  );
};

export default ProgressBar;
