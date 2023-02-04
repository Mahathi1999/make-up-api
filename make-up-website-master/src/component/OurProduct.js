import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class OurProduct extends Component {
  state = {
    arr: [
      {
        img: "https://www.sephora.com/productimages/sku/s2449734-av-50-zoom.jpg?imwidth=315",
        name: "blush",
      },

      {
        img: "https://images.unsplash.com/photo-1631237535134-e009a5939d9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
        name: "eyeliner",
      },
      {
        img: "https://images.unsplash.com/photo-1596704017324-04757f3e4273?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        name: "eyeshadow",
      },
      {
        img: "https://images.unsplash.com/photo-1631214524049-0ebbbe6d81aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        name: "lipstick",
      },
      {
        img: "https://imagiccosmetics.com/wp-content/uploads/2019/06/B12.jpg",
        name: "foundation",
      },
      {
        img: "https://images.unsplash.com/photo-1599948128020-9a44505b0d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        name: "nail_polish",
      },
      {
        img: "https://images.unsplash.com/photo-1631214499943-07647378b067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
        name: "mascara",
      },
      {
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1131802859.png?crop=0.667xw:1.00xh;0.121xw,0&resize=480:*",
        name: "bronzer",
      },
    ],
  };
  local = (name) => {
    localStorage.clear();
    localStorage.setItem("productType", name);
    localStorage.setItem("type", 2);
  };

  render() {
    return (
      <div>
        <div className="card-container">
          <section className="our-product" id="ourProduct">
            {this.state.arr.map((elem, i) => (
              <div key={i} className="product-card">
                <div className="product-image">
                  <img src={elem.img} alt="" />
                </div>
                <Link onClick={() => this.local(elem.name)} to="product_list">
                  <button type="button" className="new-btn  ">
                    {elem.name.toUpperCase().replace("_", " ")}
                  </button>
                </Link>
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  }
}
