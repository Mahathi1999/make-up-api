import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../redux/actions/cartActions";
import "../styles/style.css";
class ProductInfo extends Component {
  addToMyCart = (prod) => {
    this.props.actions.addToCart(prod);
  };

  render() {
    return (
      <div className="product-info-container">
        <div className="product-info">
          <div className="product-info-text">
            <h2>{this.props.products.name}</h2>
            <h4>{this.props.products.brand}</h4>

            <p>${this.props.products.price}</p>
            <button
              onClick={() => this.addToMyCart(this.props.products)}
              className="new-btn"
            >
              Add To Card
            </button>
          </div>
          <div className="product-info-image">
            <img
              src={this.props.products.api_featured_image}
              alt={this.props.products.name}
            />
          </div>
        </div>
        <div className="product-info-description">
          <p>{this.props.products.description}</p>
        </div>
      </div>
    );
  }
}

function mapstateToProps(state) {
  return {
    products: state.productListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}
export default connect(mapstateToProps, mapDispatchToProps)(ProductInfo);
