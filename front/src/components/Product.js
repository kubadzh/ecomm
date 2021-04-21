import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <img
        src="https://cb.scene7.com/is/image/Crate/EndGrainBoard20x14inLargeSHF16/$web_pdp_main_carousel_med$/190411135028/rectangular-end-grain-cutting-board.jpg"
        alt="Rectangular End Grain Cutting Board"
      />

      <div className="product_info">
        <p className="product_name">Product 1</p>
        <p className="product_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>

        <p className="price_info">$139.95</p>

        <Link to={`/product/${111}`} className="info_button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
