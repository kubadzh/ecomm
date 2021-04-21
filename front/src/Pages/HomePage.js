import "./HomePage.css";
import Product from "../components/Product"

function HomePage() {
  return (
    <div className="homepage">
      <h2 className="homepage_title">New arrivals</h2>
      <div className="homepage_products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default HomePage;
