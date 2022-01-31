import useScript from 'react-script-hook';
import { OMISE_SCRIPT_URL, OMISE_PUBLIC_KEY } from '../../config/env';

let OmiseCard;

const CheckoutCreditCard = ({ createCreditCardCharge, cart, subTotal }) => {
  const [loading, error] = useScript({
    src: OMISE_SCRIPT_URL,
    checkForExisting: true,
    onload: () => {
      OmiseCard = window.OmiseCard;
      OmiseCard.configure({
        publicKey: OMISE_PUBLIC_KEY,
        currency: 'thb',
        frameLabel: 'Zerious',
        submitLabel: 'Pay Now',
        buttonLabel: 'Pay with Omise',
      });
      creditCardConfigure();
    },
  });

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: 'credit_card',
      //   otherPaymentMethods: ['credit-card'],
    });
    OmiseCard.configureButton('#credit-card');
  };

  const omiseCartHandler = () => {
    OmiseCard.open({
      frameDescription: 'Invioce sth',
      amount: subTotal * 100,
      onCreateTokenSuccess: (token) => {
        createCreditCardCharge(
          'test3@gmail.com',
          'Test3',
          subTotal * 100,
          token
        );
      },
      onFormClosed: () => {},
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log('hi');
    OmiseCard.attach();
    omiseCartHandler();
  };

  return (
    <>
      <div className="own-form">
        <form>
          <button id="credit-card" type="button" onClick={handleClick}>
            Pay with credit card
          </button>
        </form>
      </div>
    </>
  );
};

export default CheckoutCreditCard;
