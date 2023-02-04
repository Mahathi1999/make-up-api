import React, { Component } from "react";
import "../styles/style.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../redux/actions/categoryActions";
import * as productActions from "../redux/actions/productActions";
import * as brandsNameActions from "../redux/actions/brandsNameActions";
import { Link } from "react-router-dom";

class ProductList extends Component {
  getName = localStorage.getItem("productType");
  getBrandsName = localStorage.getItem("brandName");
  type = localStorage.getItem("type");
  brand = localStorage.getItem("brand");

  componentDidMount() {
    this.props.actions.getCategories(this.getName);
    this.props.actions.getBrandsName(this.getBrandsName);
  }
  local2 = (elem) => {
    this.props.actions.changeInfo(elem);
  };
  productsList(list) {
    return list.map((elem, i) => (
      <div key={i} className="product-card">
        <Link
          onClick={() => this.local2(elem)}
          to="/make-up-website/product_list/product-info"
        >
          <div className="product-image">
            <img src={elem.api_featured_image} alt="" />
          </div>
        </Link>
        <div className="text">
          <h4>{elem.name}</h4>
          <div className="star-icons">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p>${elem.price}</p>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div className="card-container">
          <section className="product-list">
            {this.type
              ? this.productsList(this.props.categories)
              : this.brand
              ? this.productsList(this.props.brands)
              : " "}
          </section>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    categories: state.categoryListReducer,
    brands: state.brandsNameReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeInfo: bindActionCreators(productActions.getInfo, dispatch),
      getBrandsName: bindActionCreators(brandsNameActions.getBrands, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
