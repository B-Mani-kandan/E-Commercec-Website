import "./App.css";
import Footer from "./customer/Components/Footer/Footer";
import NavBar from "./customer/Components/Navigation/NavBar";
import Product from "./customer/Components/Product/Product";
import ProductDetails from "./customer/Components/ProductDetails/ProductDetails";
import HomePage from "./customer/Pages/HomePage/HomePage";

function App() {
  return (
    <div className="">
      <NavBar />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        <ProductDetails />
      </div>
      <Footer />
    </div>
  );
}

export default App;
