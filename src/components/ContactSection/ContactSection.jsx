import { useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

import "./ContactSection.scss";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    specialist: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      if (!formData.fullName || !formData.email || !formData.specialist) {
        setError("All fields are required!");
        setLoading(false);
        return;
      }
      const response = await fetch(
        "https://win24-assignment.azurewebsites.net/api/forms/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            specialist: formData.specialist,
          }),
        }
      );

      if (!response.ok) {
        setError("Something went wrong. Please try again later.");
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      setSuccess("Appointment made successfully");
      setFormData({
        fullName: "",
        email: "",
        specialist: "",
      });
      setLoading(false);
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <section className="contactsection">
      <Breadcrumb />
      <article className="contactsection__container">
        <aside className="contactsection__container--left">
          <h2>Contact Us</h2>
          <div className="area">
            <figure>
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.3335 0.666748H2.66683C1.38 0.666748 0.333496 1.71325 0.333496 3.00008V17.0001C0.333496 18.2869 1.38 19.3334 2.66683 19.3334H21.3335C22.6203 19.3334 23.6668 18.2869 23.6668 17.0001V3.00008C23.6668 1.71325 22.6203 0.666748 21.3335 0.666748ZM21.3335 3.00008V3.59625L12.0002 10.8564L2.66683 3.59742V3.00008H21.3335ZM2.66683 17.0001V6.55141L11.2838 13.2539C11.4938 13.4184 11.747 13.5001 12.0002 13.5001C12.2533 13.5001 12.5065 13.4184 12.7165 13.2539L21.3335 6.55141L21.3358 17.0001H2.66683Z"
                  fill="#6366F1"
                />
              </svg>
            </figure>
            <div className="content">
              <h3>Email us</h3>
              <p>
                Please feel free to drop us a line. We will respond as soon as
                possible.
              </p>
              <span>
                Leave a message{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.293 12.293L6.707 13.707L13.414 6.99997L6.707 0.292969L5.293 1.70697L9.586 5.99997H0V7.99997H9.586L5.293 12.293Z" />
                </svg>
              </span>
            </div>
          </div>

          <div className="area">
            <figure>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2129 18.4077C15.5282 17.93 14.7965 17.5408 14.0313 17.2434C15.0492 16.3182 15.7245 15.0222 15.842 13.5713C17.3856 12.0671 19.4091 11.2426 21.5782 11.2426C23.2716 11.2426 24.8975 11.7525 26.2805 12.717C26.7761 13.0626 27.4575 12.9413 27.8032 12.4457C28.1486 11.9503 28.0273 11.2686 27.5319 10.9232C26.8472 10.4455 26.1154 10.0565 25.3502 9.75894C26.4734 8.73804 27.1796 7.26596 27.1796 5.63217C27.1796 2.55664 24.6777 0.0546875 21.6021 0.0546875C18.5268 0.0546875 16.0249 2.55664 16.0249 5.63217C16.0249 7.25934 16.7253 8.72608 17.8409 9.74655C17.6881 9.8053 17.5362 9.86747 17.3859 9.93369C16.7014 10.2349 16.058 10.6053 15.4596 11.0403C14.6344 8.99012 12.6253 7.53919 10.2833 7.53919C7.208 7.53919 4.70583 10.0411 4.70583 13.1165C4.70583 14.7391 5.40245 16.2018 6.51201 17.2219C3.54543 18.3333 1.14003 20.7206 0.160783 23.7651C-0.163924 24.7747 0.00804216 25.8454 0.632676 26.7027C1.25731 27.5597 2.22374 28.0513 3.28417 28.0513H12.7987C13.4026 28.0513 13.8923 27.5617 13.8923 26.9575C13.8923 26.3536 13.4026 25.864 12.7987 25.864H3.28417C2.93062 25.864 2.60848 25.7001 2.40019 25.4143C2.19191 25.1285 2.13466 24.7715 2.24275 24.4349C3.32369 21.0741 6.62032 18.7271 10.2594 18.7271C11.9526 18.7271 13.5787 19.237 14.9617 20.2015C15.4571 20.5471 16.1387 20.4256 16.4844 19.9302C16.8298 19.4348 16.7085 18.7531 16.2129 18.4077ZM21.6021 2.24197C23.4716 2.24197 24.9923 3.76276 24.9923 5.63217C24.9923 7.50138 23.4716 9.02237 21.6021 9.02237C19.7329 9.02237 18.2119 7.50138 18.2119 5.63217C18.2119 3.76276 19.7329 2.24197 21.6021 2.24197ZM10.2833 9.72626C12.1527 9.72626 13.6735 11.2473 13.6735 13.1165C13.6735 14.9859 12.1527 16.5067 10.2833 16.5067C8.4139 16.5067 6.89312 14.9859 6.89312 13.1165C6.89312 11.2473 8.4139 9.72626 10.2833 9.72626ZM27.9999 22.8566C27.9999 23.4605 27.5103 23.9501 26.9062 23.9501H23.8988V26.9575C23.8988 27.5617 23.4092 28.0513 22.8053 28.0513C22.2011 28.0513 21.7115 27.5617 21.7115 26.9575V23.9501H18.7041C18.1002 23.9501 17.6106 23.4605 17.6106 22.8566C17.6106 22.2525 18.1002 21.7629 18.7041 21.7629H21.7115V18.7555C21.7115 18.1516 22.2011 17.6619 22.8053 17.6619C23.4092 17.6619 23.8988 18.1516 23.8988 18.7555V21.7629H26.9062C27.5103 21.7629 27.9999 22.2525 27.9999 22.8566Z"
                  fill="#6366F1"
                />
              </svg>
            </figure>
            <div className="content">
              <h3>Careers</h3>
              <p>
                Sit ac ipsum leo lorem magna nunc mattis maecenas non
                vestibulum.
              </p>
              <span>
                Send an application{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.293 12.293L6.707 13.707L13.414 6.99997L6.707 0.292969L5.293 1.70697L9.586 5.99997H0V7.99997H9.586L5.293 12.293Z" />
                </svg>
              </span>
            </div>
          </div>
        </aside>
        <form
          className="contactsection__container--right"
          onSubmit={handleSubmit}
        >
          <h3>Get Online Consultation</h3>

          {success.length ? (
            <p className="success">{success}</p>
          ) : (
            <div className="form">
              <div>
                <label htmlFor="fullName">Full name</label>
                <input
                  type="text"
                  id="fullName"
                  onChange={handleChange}
                  value={formData.fullName}
                />
              </div>

              <div>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>

              <div>
                <label htmlFor="specialist">Specialist</label>
                {/* <input
                  type="text"
                  id="specialist"
                  onChange={handleChange}
                  value={formData.specialist}
                /> */}
                <select id="specialist" onChange={handleChange}>
                  <option value=""></option>
                  <option value="John Doe">John Doe</option>
                  <option value="Mark Ling">Mark Ling</option>
                  <option value="Mercedes Benz">Mercedes Benz</option>
                </select>
              </div>
            </div>
          )}
          <p className={`error ${error.length && "active"}`}>{error}</p>
          {!success.length && (
            <button disabled={loading}>
              {loading ? "Loading..." : "Make an appointment"}
            </button>
          )}
        </form>
      </article>
    </section>
  );
};

export default ContactSection;
