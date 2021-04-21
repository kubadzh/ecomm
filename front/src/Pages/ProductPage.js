import "./ProductPage.css";

function ProductPage() {
  return (
    <div className="productpage">
      <div className="productpage_left">
        <div className="left_image">
          <img
            src="https://cb.scene7.com/is/image/Crate/EndGrainBoard20x14inLargeSHF16/$web_pdp_main_carousel_med$/190411135028/rectangular-end-grain-cutting-board.jpg"
            alt="product name"
          />
        </div>
        <div className="left_info">
          <p className="left_name">Product 1</p>
          <p>Price: $139.95</p>
          <p>
            Description: sdfghs;dfhkgjsdkjfhgksljdfhgkjsdhfkgjhsdfkghsdjfkhg
          </p>
        </div>
      </div>

      <div className="productpage_right">
        <div className="right_info">
          <p>
            Price: <span>$139.95</span>
          </p>
          <p>
            Status: <span>In stock</span>
          </p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add to cart</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
