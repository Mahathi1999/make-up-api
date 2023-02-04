import React, { Component } from "react";
import "../../styles/style.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as searchProductActions from "../../redux/actions/searchProductActions";
import * as categoryActions from "../../redux/actions/categoryActions";

class Navbar extends Component {
  mySearch(event) {
    this.props.actions.search();
    localStorage.setItem("productType", this.props.val.trim());
    localStorage.setItem("type", 2);
    event.preventDefault();
  }
  state = {
    isActive: false,
    isActive2: false,
    arr: [
      {
        id: "nav-1",
        class: "slide-out-1",
        class2: "slide-in-1",
        name: "Home",
        to: "#home",
      },
      {
        id: "nav-2",
        class: "slide-out-2",
        class2: "slide-in-2",
        name: "Brands",
        to: "#brands",
      },
      {
        id: "nav-3",
        class: "slide-out-3",
        class2: "slide-in-3",
        name: "Product",
        to: "#ourProduct",
      },
      {
        id: "nav-4",
        class: "slide-out-4",
        class2: "slide-in-4",
        name: "Contact",
        to: "#contact",
      },
    ],
  };

  toggleHandle = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  toggleHandle2 = () => {
    this.setState({ isActive2: !this.state.isActive2 });
  };

  render() {
    let isActive = this.state.isActive;
    let isActive2 = this.state.isActive2;
    let arr = this.state.arr;
    console.log(this.props.val);

    return (
      <div>
        <div className="beauty-logo">
          <h2 className="logo">N</h2>

          <Link style={{ textDecoration: "none" }} to="/make-up-website">
            <h1 className="logo-text">Nilabro Beauty</h1>
          </Link>
        </div>

        <div className="main-container">
          <div
            className={
              isActive
                ? "overlay  overlay-slide-right"
                : "overlay  overlay-slide-left"
            }
            id="overlay"
          >
            <nav className="navbar">
              <ul>
                {arr.map((nav) => (
                  <li
                    onClick={() => this.toggleHandle()}
                    key={nav.id}
                    className={isActive ? nav.class2 : nav.class}
                    id={nav.id}
                  >
                    <a href={nav.to}>{nav.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div
            className={isActive ? " menu-bars change" : "menu-bars "}
            id="menu-bars"
            onClick={() => this.toggleHandle()}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div className="icon-cont">
            <div className="icon">
              <Link
                style={{ textDecoration: "none" }}
                to="make-up-website/account"
              >
                <i className="fas fa-user" />
              </Link>

              <Link
                style={{ textDecoration: "none" }}
                to="make-up-website/cart"
              >
                <i className="fas fa-shopping-cart" />
              </Link>

              <i
                onClick={() => this.toggleHandle2()}
                className="fas fa-search"
              />
            </div>
          </div>
          <div className={isActive2 ? "form-container" : "opacity-0"}>
            <Link onSubmit={() => this.mySearch()} to="/product_list">
              <form>
                <label htmlFor="search"></label>

                <i className="fas fa-search" />
                <input
                  value={this.props.val}
                  onChange={(evt) => this.props.actions.searchValue(evt)}
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Search for the products"
                />
                <div
                  className="menu-bars2"
                  onClick={() => this.toggleHandle2()}
                >
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </div>
              </form>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      searchValue: bindActionCreators(
        searchProductActions.searchValue,
        dispatch
      ),
      search: bindActionCreators(categoryActions.getCategories, dispatch),
    },
  };
}
function mapStateToProps(state) {
  return {
    val: state.searchProductReducer,
    categories: state.categoryListReducer,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
