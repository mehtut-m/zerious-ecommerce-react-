import { Link } from 'react-router-dom';
const BreadCrumb = ({ children }) => {
  console.log(children);
  return (
    <ol className="breadcrumb flex py-3">
      {/* <li className="breadcrumb-item text-gray-400 after:content-['>']">
        <Link to="#">Cart</Link>
      </li>
      <li className="breadcrumb-item after:content-['>'] px-2">
        <Link to="#">Order Summary</Link>
      </li>
      <li className="breadcrumb-item text-gray-400" aria-current="page">
        <Link to="#">Payment</Link>
      </li> */}
      {children}
    </ol>
  );
};

export default BreadCrumb;
