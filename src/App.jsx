import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import EyeGlasses from "./pages/EyeGlasses"
import Sale from "./pages/Sale"
import ProductDescription from "./components/ProductDescription"
import Cart from "./pages/Cart"
import AuthModal from "./components/AuthModal"
import HomeEyeTest from "./pages/HomeEyeTest"

function App() {

  const location = useLocation();

  const noLayoutPages = [
    "/cart",
    "/homeeyetest"
  ];

  const hideLayout = noLayoutPages.includes(location.pathname);

  const secondHideLayout = location.pathname === "/"

  return (
    <>
      <div className="min-h-screen flex flex-col">

        {!hideLayout && <Navbar />}

        <AuthModal />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/eyeglasses" element={<EyeGlasses />} />
            <Route path="/eyeglasses/:id" element={<ProductDescription />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/homeeyetest" element={<HomeEyeTest />} />
          </Routes>
        </main>

        {!hideLayout && !secondHideLayout && <Footer />}
      </div>
    </>
  )
}

export default App
