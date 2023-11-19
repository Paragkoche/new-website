"use client";

import { useMediaQuery } from "react-responsive";
import { cards } from "./db";
import "./style.scss";

const Services = () => {
  const isMobile = useMediaQuery({ maxWidth: 820 });

  return (
    <section id="services">
      {isMobile ? (
        <div className="services-mobile">
          <h3>services</h3>
          <p>
            We're not just building websites, we're creating digital
            masterpieces.
          </p>
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <div className="title">
                <h4>{card.title}</h4>
              </div>
              <ul>
                {card.list.map((item, i) => (
                  <li key={i}>{item.item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="services-desktop">
          <h3>services</h3>
        </div>
      )}
    </section>
  );
};

export default Services;
