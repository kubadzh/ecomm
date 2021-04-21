import "./CartPage.css";

import CartItem from "../components/CartItem";

function CartPage() {
  return (
    <div className="cartpage">
      <div className="cartpage_left">
        <h2>Shopping Cart</h2>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="cartpage_right">
        <div className="cartpage_info">
          <p>Subtotal (0) items</p>
          <p>$139.95</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
