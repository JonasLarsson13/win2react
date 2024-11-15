import image1 from "../../assets/logo-image1.svg";
import image2 from "../../assets/logo-image2.svg";
import image3 from "../../assets/logo-image3.svg";
import image4 from "../../assets/logo-image4.svg";
import image5 from "../../assets/logo-image5.svg";
import image6 from "../../assets/logo-image6.svg";

import "./Logos.scss";

const Logos = () => {
  return (
    <section className="logos">
      <div className="logos__container">
        <figure>
          <img src={image1} alt="logo-image1" />
        </figure>
        <figure>
          <img src={image2} alt="logo-image2" />
        </figure>
        <figure>
          <img src={image3} alt="logo-image3" />
        </figure>
        <figure>
          <img src={image4} alt="logo-image4" />
        </figure>
        <figure>
          <img src={image5} alt="logo-image5" />
        </figure>
        <figure>
          <img src={image6} alt="logo-image6" />
        </figure>
      </div>
    </section>
  );
};

export default Logos;
