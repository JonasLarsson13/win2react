import phoneImage1 from "../../assets/three-phones-l.svg";
import phoneImage2 from "../../assets/three-phones-m.svg";
import phoneImage3 from "../../assets/three-phones-r.svg";
import phoneImage4 from "../../assets/three-phones-small.svg";

import "./HowDoesItWork.scss";

const HowDoesItWork = () => {
  return (
    <section className="how">
      <div className="how__container">
        <h1>How Does It Work?</h1>
        <aside>
          <figure className="desktop">
            <img src={phoneImage1} alt="Phone one" />
          </figure>
          <figure className="desktop">
            <img src={phoneImage2} alt="Phone two" />
          </figure>
          <figure className="desktop">
            <img src={phoneImage3} alt="Phone three" />
          </figure>
          <figure className="for-phone">
            <img src={phoneImage4} alt="Phone shown for phones" />
          </figure>
        </aside>
        <h3 className="desk">Latest transaction history</h3>
        <p className="desk">
          Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu
          sociis tristique quisque hac in consectetur condimentum.
        </p>
        <h3 className="phone">Transfers to people from your contact list</h3>
        <p className="phone">
          Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
          Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
        </p>
      </div>
    </section>
  );
};

export default HowDoesItWork;
