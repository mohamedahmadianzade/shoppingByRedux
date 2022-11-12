import React from "react";
import ShoppingCartSlice from "../shopping/shoppingCartSlice";
import { connect } from "react-redux";
class Product extends React.Component {
  constructor(props) {
    super(props);
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
    let product = this.props.product;
    return (
      <div className="card" style={{ width: 300 }}>
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt="..."
          style={{ height: 150 }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
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
export default connect(mapState)(Product);
