import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartItem from "./shoppingCartItem";
export default function ShoppingCart() {
  const productList = useSelector((state) => state.shoppingCart.productList);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div
            className="alert alert-success"
            role="alert"
            style={{ width: "100%" }}
          >
            User selected Products
            <Link to="/">
              <button className="btn btn-success float-start">
                back To Store
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        {productList.map((product) => (
          <div className="col-sm-12">
            <ShoppingCartItem
              product={product}
              key={product.id}
              style={{ margin: 15 }}
            ></ShoppingCartItem>
          </div>
        ))}
      </div>
    </div>
  );
}
