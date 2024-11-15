import { useState, useEffect } from "react";

import quoteIcon from "../../assets/icons/quote.svg";
import fourStars from "../../assets/icons/4stars.svg";
import fiveStars from "../../assets/icons/5stars.svg";

import "./Testimonials.scss";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://win24-assignment.azurewebsites.net/api/testimonials"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const renderStars = (starRating) => {
    return starRating === 4 ? fourStars : fiveStars;
  };

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h1>Clients are Loving Our App</h1>
        {testimonials.map((testimonial) => (
          <aside key={testimonial.id}>
            <img src={quoteIcon} alt="quote" className="quote" />
            <img
              src={renderStars(testimonial.starRating)}
              alt={`${testimonial.starRating} stars`}
              className="stars"
            />
            <p>{testimonial.comment}</p>
            <div className="custom-avatar">
              <img src={testimonial.avatarUrl} alt={testimonial.author} />
              <span>
                <b>{testimonial.author}</b>
                <p>{testimonial.jobRole}</p>
              </span>
            </div>
          </aside>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
