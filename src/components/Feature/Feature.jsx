import phoneWithCard from "../../assets/phone-w-card.svg";
import paymentIcon from "../../assets/icons/payment.svg";
import securityIcon from "../../assets/icons/security.svg";
import statisticsIcon from "../../assets/icons/statistics.svg";
import supportIcon from "../../assets/icons/support.svg";
import cashbackIcon from "../../assets/icons/cashback.svg";
import standardsIcon from "../../assets/icons/standards.svg";

import "./Feature.scss";

const Feature = () => {
  return (
    <section className="features">
      <div className="features__container">
        <figure className="features__container--left">
          <img src={phoneWithCard} alt="phone-with-card" />
        </figure>
        <article className="features__container--right">
          <h1>App Features</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque
            volutpat ligula est. Mattis fermentum, at nec lacus.
          </p>
          <aside>
            <div>
              <figure className="custom-icon">
                <img src={paymentIcon} alt="Payments" />
              </figure>
              <span>
                <h3>Easy Payments</h3>
                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </span>
            </div>

            <div>
              <figure className="custom-icon">
                <img src={securityIcon} alt="Security" />
              </figure>
              <span>
                <h3>Data Security</h3>
                <p>
                  Augue pulvinar justo, fermentum fames aliquam accumsan
                  vestibulum non.
                </p>
              </span>
            </div>

            <div>
              <figure className="custom-icon">
                <img src={statisticsIcon} alt="Statistics" />
              </figure>
              <span>
                <h3>Cost Statistics</h3>
                <p>
                  Mattis urna ultricies non amet, purus in auctor non. Odio
                  vulputate ac nibh.
                </p>
              </span>
            </div>

            <div>
              <figure className="custom-icon">
                <img src={supportIcon} alt="Support" />
              </figure>
              <span>
                <h3>Support 24/7</h3>
                <p>
                  A elementum, imperdiet enim, pretium etiam facilisi in aenean
                  quam mauris.
                </p>
              </span>
            </div>

            <div>
              <figure className="custom-icon">
                <img src={cashbackIcon} alt="Cashback" />
              </figure>
              <span>
                <h3>Regular Cashback</h3>
                <p>
                  Sit facilisis dolor arcu, fermentum vestibulum arcu elementum
                  imperdiet eleifend.
                </p>
              </span>
            </div>

            <div>
              <figure className="custom-icon">
                <img src={standardsIcon} alt="Standards" />
              </figure>
              <span>
                <h3>Top Standards</h3>
                <p>
                  Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus
                  id. Sit facilisis dolor arcu.
                </p>
              </span>
            </div>
          </aside>
        </article>
      </div>
    </section>
  );
};

export default Feature;
