import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail></FaCocktail>,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, atque!"
      },
      {
        icon: <FaHiking></FaHiking>,
        title: "Endless hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, atque!"
      },
      {
        icon: <FaShuttleVan></FaShuttleVan>,
        title: "free shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, atque!"
      },
      {
        icon: <FaBeer></FaBeer>,
        title: "best beers",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, atque!"
      }
    ]
  };
  render() {
    return (
      <section className='services'>
        <Title title='services'></Title>
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
