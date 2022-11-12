import React from "react";
import axios from "axios";
import Product from "./product";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class ProductList extends React.Component {
  constructor() {
    super();
    this.state = { ProductList: [] };
  }
  componentDidMount() {
    axios.get("https://dummyjson.com/products").then((res) => {
      this.setState({
        ProductList: res.data.products.map((product) => {
          return { ...product, count: 0 };
        }),
      });
    });
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="alert alert-success" role="alert">
                Products:{" "}
                <span className="badge bg-success">{this.props.count}</span>
                {"  "}{" "}
                {this.props.count != 0 && (
                  <b>
                    <Link to="/shoppingcart">- show shopping List</Link>
                  </b>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            {this.state.ProductList.map((product) => (
              <Product product={product} key={product.id}></Product>
            ))}
          </div>
        </div>
      </>
    );
  }
}
const mapState = (state) => ({
  count: state.shoppingCart.count,
});
export default connect(mapState)(ProductList);
