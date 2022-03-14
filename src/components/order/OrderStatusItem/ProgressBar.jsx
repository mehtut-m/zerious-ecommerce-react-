import Stepper from 'react-stepper-horizontal';

const progress = [
  { status: 'Order Placed', title: 'Order Placed' },
  { status: 'Paid', title: 'Payment Received' },
  { status: 'Shipped', title: 'Shipment in progress' },
  { status: 'Completed', title: 'Completed' },
];
const ProgressBar = ({ status }) => {
  const activeStep = progress.findIndex(
    (el) => el.status.toUpperCase() === status
  );

  return (
    <>
      <div className="my-9">
        <Stepper
          steps={progress}
          activeStep={activeStep}
          activeColor={'#ff8b37'}
          completeColor={'#ff8b37'}
        />
      </div>
    </>
  );
};

export default ProgressBar;
