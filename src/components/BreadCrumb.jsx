import { Link } from 'react-router-dom';
const BreadCrumb = ({ children }) => {
  return <ol className="breadcrumb flex py-3">{children}</ol>;
};

export default BreadCrumb;
