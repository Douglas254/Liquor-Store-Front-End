import { Footer, TopNavbar, Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import CheckoutContact from "./pages/CheckoutContact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <TopNavbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singleproduct/:productId" element={<SingleProduct />} />
        <Route path="/CheckoutContact" element={<CheckoutContact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
