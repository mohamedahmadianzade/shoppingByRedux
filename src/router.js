import {
    createBrowserRouter,
    Link,
} from "react-router-dom";
import ShoppingCart from "./components/shopping/shoppingCart";
import App from "./components/app/App";
import ProductList from "./components/Product/productList";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <ProductList></ProductList>
            },
            {
                path: "shoppingcart",
                element: <ShoppingCart></ShoppingCart>
            },
        ]
    },
]);
export default router