import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem_image">
        <img
          src="https://cb.scene7.com/is/image/Crate/EndGrainBoard20x14inLargeSHF16/$web_pdp_main_carousel_med$/190411135028/rectangular-end-grain-cutting-board.jpg"
          alt="Rectangular End Grain Cutting Board"
        />
      </div>

      <Link to={`/product/${111}`} className="cartitem_name">
        <p>Product 1</p>
      </Link>

      <p className="cartitem_price">$139.95</p>

      <select className="cartitem_select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button className="cartitem_deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
