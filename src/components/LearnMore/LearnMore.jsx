import moneyImage from "../../assets/money.svg";
import paymentsImage from "../../assets/payment.svg";
import paymentImage from "../../assets/icons/payment.svg";
import cashbackImage from "../../assets/icons/cashback.svg";

import "./LearnMore.scss";

const LearnMore = () => {
  return (
    <section className="mp">
      <div className="mp__container">
        <article>
          <aside>
            <h3>Make your money transfer simple and clear</h3>
            <ol>
              <li>Banking transactions are free for you</li>
              <li>No monthly cash commission</li>
              <li>Manage payments and transactions online</li>
            </ol>
            <button className="custom-btn arrow">
              Learn more
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.41083 10.4108L5.58917 11.5892L11.1783 5.99999L5.58917 0.410828L4.41083 1.58916L7.98833 5.16666H0V6.83333H7.98833L4.41083 10.4108Z"
                  fill="white"
                />
              </svg>
            </button>
          </aside>
          <figure>
            <img src={moneyImage} alt="Money" />
          </figure>
        </article>
        <article>
          <figure>
            <img src={paymentsImage} alt="Payments" />
          </figure>
          <aside>
            <h3>Receive payment from international bank details</h3>
            <div className="payment-details">
              <span>
                <figure className="custom-icon">
                  <img src={paymentImage} alt="Payment" />
                </figure>
                <p>
                  Manage your payments online. Mollis congue egestas egestas
                  fermentum fames.
                </p>
              </span>
              <span>
                <figure className="custom-icon">
                  <img src={cashbackImage} alt="Cashbacks" />
                </figure>
                <p>
                  A elementur and imperdiet enim, pretium etiam facilisi aenean
                  quam mauris.
                </p>
              </span>
            </div>
            <button className="custom-btn arrow">
              Learn more
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.41083 10.4108L5.58917 11.5892L11.1783 5.99999L5.58917 0.410828L4.41083 1.58916L7.98833 5.16666H0V6.83333H7.98833L4.41083 10.4108Z"
                  fill="white"
                />
              </svg>
            </button>
          </aside>
        </article>
      </div>
    </section>
  );
};

export default LearnMore;
