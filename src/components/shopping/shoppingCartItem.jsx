import React from "react";
import ShoppingCartSlice from "./shoppingCartSlice";
import { connect } from "react-redux";
import axios from "axios";
class ShoppingCartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        id: 1,
        title: "2",
      },
    };
  }

  componentDidMount() {
    axios("https://dummyjson.com/products/" + this.props.product.id).then(
      (res) => {
        this.setState({
          product: res.data,
        });
      }
    );
  }
  selectProductCount = () => {
    return this.props?.productInStore?.count || 0;
  };
  add = (id) => {
    this.props.dispatch(ShoppingCartSlice.actions.add({ id }));
  };
  remove = (id) => {
    this.props.dispatch(ShoppingCartSlice.actions.remove({ id }));
  };
  getBadgeClass() {
    let count = this.selectProductCount();
    return count == 0 ? "badge bg-light" : "badge bg-success";
  }

  render() {
    let product = this.state.product;
    return (
      <div className="card mb-3" style={{ maxWidth: "100%" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={product.thumbnail}
              className="card-img-top"
              alt="..."
              style={{ maxWidth: 250 }}
            />
          </div>
          <div class="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        </div>

        <div className="card-footer">
          <button
            className="btn btn-danger m-2 btn-sm"
            onClick={() => this.remove(product.id)}
            disabled={this.selectProductCount() == 0}
          >
            -
          </button>
          <span className={this.getBadgeClass(product.id)}>
            {this.selectProductCount()}
          </span>
          <button
            className="btn btn-primary m-2  btn-sm"
            onClick={() => this.add(product.id)}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

const mapState = (state, props) => {
  return {
    productInStore: state.shoppingCart.productList.find(
      (item) => item.id == props.product.id
    ),
  };
};
export default connect(mapState)(ShoppingCartItem);
