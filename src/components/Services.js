import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import * as Components from "./Components";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cooktails",
        info: "Free Cocktails",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info: "Endless Hiking",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: "Free Shuttle",
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info: "Strongest Beer",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Components.Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            const { icon, title, info } = item;

            return (
              <article key={index} className="service">
                <span>{icon}</span>
                <h6>{title}</h6>
                <p>{info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
