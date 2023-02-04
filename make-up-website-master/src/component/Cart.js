import React, { Component } from "react";
import "../styles/style.css";
import { connect } from "react-redux";

class Cart extends Component {
  state = { counter: 1, inputValue: Infinity };
  hesapla() {
    let add = 0;
    this.props.cartItem.forEach((elem) => {
      add = add + parseInt(elem.price);
    });
    return add;
  }
  hesapla2(elem) {
    this.props.cartItem.forEach((kay) => {
      if (kay.id === elem.id) {
        console.log(kay.id);
      }
    });
  }

  /* increment = (elem) => {
    // this.setState({ value: ++this.state.value });
    if (this.state.counter < this.state.inputValue) {
      let counter = this.state.counter + 1;
      this.setState({ counter });
      this.hesapla2(elem);
    }
  };

  decrement = () => {
    //  this.setState({ value: this.state.value > 0 ? --this.state.value : 0 });

    if (this.state.counter > 0) {
      let counter = this.state.counter - 1;
      this.setState({ counter });
    }
  };*/
  handleChange(e) {
    // let val = parseInt(event.target.value, 10);
    // this.setState({ value: isNaN(val) ? 0 : val });

    let inputValue = parseInt(e.target.value);
    this.setState({ inputValue });
  }
  render() {
    //let total = localStorage.getItem("price");

    return (
      <div className="shopping-container">
        <h3 style={{ fontSize: "2.4rem" }}>Your card</h3>

        {this.props.cartItem.map((c) => (
          <div key={c.id} className="shopping row">
            <div className="product col">
              <h4 className="shop-text">
                {c.product_type.toUpperCase().replace("_", " ")}
              </h4>
              <div className="image ">
                <img src={c.api_featured_image} alt="" />
              </div>
              <div className="text">
                <h4>{c.name}</h4>

                <p>${c.price}</p>
              </div>
            </div>
            <div className="quantity col">
              <h4 className="shop-text">QUANTITY</h4>
              <div className="control">
                <div
                  onClick={this.decrement}
                  className="value-button"
                  id="decrease"
                >
                  -
                </div>
                <input
                  onChange={this.handleChange}
                  type="number"
                  id="number"
                  value={this.state.counter}
                />
                <div
                  onClick={() => this.increment(c)}
                  className="value-button"
                  id="increase"
                >
                  +
                </div>
              </div>
            </div>
            <div className="total col">
              <h4 className="shop-text">TOTAL</h4>
              <small className="small">${c.price}</small>
            </div>
          </div>
        ))}
        <div className="finally-total">
          <h4>Total</h4>
          <p>${this.hesapla()}</p>
          <button className="new-btn">Checkout</button>
        </div>
      </div>
    );
  }
}

function mapstateToProps(state) {
  return {
    cartItem: state.cartReducer,
    products: state.productListReducer,

    //  counter: state.counterReducer,
  };
}

export default connect(mapstateToProps)(Cart);
