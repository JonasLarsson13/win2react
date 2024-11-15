import { useState, useEffect } from "react";
import phoneImage from "../../assets/icons/phone-purp.svg";
import messageImage from "../../assets/icons/message-green.svg";
import notificationImage from "../../assets/icons/notification.svg";
import "./Faqs.scss";

const Faqs = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeFaq, setActiveFaq] = useState(null);
  const [subscribed, setSubscribed] = useState(false);
  const [subscribedError, setSubscribedError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch(
          "https://win24-assignment.azurewebsites.net/api/faq"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch FAQs");
        }
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchFaqs();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubscribedError("");
    setIsLoading(true);
    try {
      const email = e.target.querySelector("input").value;

      if (!email) {
        setSubscribedError("Email is required");
        setIsLoading(false);
        return;
      }

      const response = await fetch(
        "https://win24-assignment.azurewebsites.net/api/forms/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        setSubscribedError("Something went wrong, try again later");
        setIsLoading(false);
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      setSubscribed(true);
      setIsLoading(false);
    } catch (error) {
      console.log("Error subscribing:", error);
      setSubscribedError("Something went wrong, try again later");
      setIsLoading(false);
    }
  };

  return (
    <section className="faqs">
      <header className="small-devices-header">
        <h1>
          Any questions?
          <br />
          Check out the FAQs
        </h1>
        <p>Still have unanswered questions and need to get in touch?</p>
      </header>

      <article className="main-content">
        <aside className="left-side">
          <h1>
            Any questions?
            <br />
            Check out the FAQs
          </h1>

          <p className="desktop">
            Still have unanswered questions and need to get in touch?
          </p>

          <div className="contact-details">
            <figure>
              <img src={phoneImage} alt="Contact by Phone" />
              <p>Still have questions?</p>
              <button>
                Contact us
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.41083 10.4108L5.58917 11.5892L11.1783 5.99999L5.58917 0.410828L4.41083 1.58916L7.98833 5.16666H0V6.83333H7.98833L4.41083 10.4108Z"
                    fill="#6366F1"
                  />
                </svg>
              </button>
            </figure>

            <figure>
              <img src={messageImage} alt="Contact by Other" />
              <p>Don&apos;t like phone calls?</p>
              <button>
                Contact us
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.41083 10.4108L5.58917 11.5892L11.1783 5.99999L5.58917 0.410828L4.41083 1.58916L7.98833 5.16666H0V6.83333H7.98833L4.41083 10.4108Z"
                    fill="#22C55E"
                  />
                </svg>
              </button>
            </figure>

            <button className="custom-btn sd">Contact us now</button>
          </div>
        </aside>

        <aside className="right-side" id="faqs">
          {faqs &&
            faqs.map((faq) => (
              <div
                key={faq.id}
                className={activeFaq === faq.id ? "active" : ""}
              >
                <header
                  onClick={() =>
                    setActiveFaq(activeFaq === faq.id ? null : faq.id)
                  }
                >
                  <h3>{faq.title}</h3>
                  <figure>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5775 7.74414L9.99997 11.3216L6.42247 7.74414L5.24414 8.92247L9.99997 13.6783L14.7558 8.92247L13.5775 7.74414Z"
                        fill="var(--text-color)"
                      />
                    </svg>
                  </figure>
                </header>
                <span>{faq.content}</span>
              </div>
            ))}
        </aside>
      </article>

      <article className="subscibe-content">
        <div className="left">
          <img src={notificationImage} alt="Subscribe Notification" />
          <h2 className="desktop">
            Subscribe to our newsletter to stay informed about latest updates
          </h2>
          <h2 className="mobile">Subscribe to our newsletter</h2>
        </div>
        <form onSubmit={(e) => handleSubscribe(e)}>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.667 3.33337H3.33366C2.41449 3.33337 1.66699 4.08087 1.66699 5.00004V15C1.66699 15.9192 2.41449 16.6667 3.33366 16.6667H16.667C17.5862 16.6667 18.3337 15.9192 18.3337 15V5.00004C18.3337 4.08087 17.5862 3.33337 16.667 3.33337ZM16.667 5.00004V5.42587L10.0003 10.6117L3.33366 5.42671V5.00004H16.667ZM3.33366 15V7.53671L9.48866 12.3242C9.63866 12.4417 9.81949 12.5 10.0003 12.5C10.1812 12.5 10.362 12.4417 10.512 12.3242L16.667 7.53671L16.6687 15H3.33366Z"
                fill="#B4B7C9"
              />
            </svg>
            <input type="email" placeholder="Your Email" />
          </div>
          <button
            className="custom-btn"
            disabled={subscribed}
            style={
              subscribed ? { backgroundColor: "gray", cursor: "default" } : {}
            }
          >
            {isLoading ? "Loading..." : "Subscribe"}
          </button>
        </form>
        <span className={`subscribed ${subscribed && "success"}`}>
          Subscribed successfully!
        </span>
        <span
          className={`subscribedError ${subscribedError.length && "error"}`}
        >
          {subscribedError}
        </span>
      </article>
    </section>
  );
};

export default Faqs;
