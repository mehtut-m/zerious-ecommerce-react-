import { Link } from 'react-router-dom';
const BreadCrumb = () => {
  return (
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="#">Cart</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to="#">Order Summary</Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        <Link to="#">Payment</Link>
      </li>
    </ol>
  );
};

export default BreadCrumb;
