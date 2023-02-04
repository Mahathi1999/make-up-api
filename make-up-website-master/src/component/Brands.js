import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "../img/img1.jpg";

export default class Brands extends Component {
  state = {
    arr: [
      "almay",
      "alva",
      "anna sui",
      "annabelle",
      "benefit",
      "boosh",
      "burt's bees",
      "butter london",
      "c'est moi",
      "cargo cosmetics",
      "china glaze",
      "clinique",
      "coastal classic creation",
      "colourpop",
      "covergirl",
      "dalish",
      "deciem",
      "dior",
      "dr. hauschka",
      "e.l.f.",
      "essie",
      "fenty",
      "glossier",
      "green people",
      "iman",
      "l'oreal",
      "lotus cosmetics usa",
      "maia's mineral galaxy",
      "marcelle",
      "marienatie",
      "maybelline",
      "milani",
      "mineral fusion",
      "misa",
      "mistura",
      "moov",
      "nyx",
      "pacifica",
      "revlon",
      "sally b's skin yummies",
      "salon perfect",
      "sante",
      "sinful colours",
      "smashbox",
      "stila",
      "suncoat",
      "w3llpeople",
    ],
  };
  local = (name) => {
    localStorage.clear();
    localStorage.setItem("brandName", name);
    localStorage.setItem("brand", 1);
  };
  render() {
    console.log(img);
    return (
      <div>
        <div className="brands-list">
          <section className="brands" id="brands">
            <ul>
              {this.state.arr.map((brand, i) => (
                <Link
                  style={{ textDecoration: "none" }}
                  onClick={() => this.local(brand)}
                  key={i}
                  to="product_list"
                >
                  <li>{brand}</li>
                </Link>
              ))}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}
