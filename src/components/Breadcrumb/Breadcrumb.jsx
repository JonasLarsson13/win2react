import { Link } from "react-router-dom";

import "./Breadcrumb.scss";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <Link to="/">
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.75244 15.5002H4.75244H9.25244H12.2524C13.0797 15.5002 13.7524 14.8274 13.7524 14.0002V7.25019C13.7524 7.05144 13.6737 6.86019 13.5327 6.71994L7.53269 0.719937C7.23944 0.426687 6.76544 0.426687 6.47219 0.719937L0.472191 6.71994C0.331191 6.86019 0.252441 7.05144 0.252441 7.25019V14.0002C0.252441 14.8274 0.925191 15.5002 1.75244 15.5002ZM5.50244 14.0002V10.2502H8.50244V14.0002H5.50244ZM1.75244 7.56069L7.00244 2.31069L12.2524 7.56069L12.2532 14.0002H10.0024V10.2502C10.0024 9.42294 9.32969 8.75019 8.50244 8.75019H5.50244C4.67519 8.75019 4.00244 9.42294 4.00244 10.2502V14.0002H1.75244V7.56069Z" />
        </svg>
        Homepage
      </Link>
      <span>
        {" "}
        <svg
          width="9"
          height="8"
          viewBox="0 0 9 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.86409 1.14003L6.74743 4.00003L3.86409 6.86003L4.80276 7.80669L8.64076 4.00003L4.80276 0.193359L3.86409 1.14003Z"
            fill="#9397AD"
          />
          <path
            d="M1.46943 0.193359L0.530762 1.14003L3.4141 4.00003L0.530762 6.86003L1.46943 7.80669L5.30743 4.00003L1.46943 0.193359Z"
            fill="#9397AD"
          />
        </svg>
      </span>
      <Link to="/contact" className="active">
        Contact
      </Link>
    </div>
  );
};

export default Breadcrumb;
