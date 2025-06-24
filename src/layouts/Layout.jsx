import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import ProgressBar from "../components/partials/ProgressBar";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/partials/ScrollToTop";

export default function Layout() {
  return (
    <>
        <ProgressBar />
        <Navbar />
        <Outlet />
        <Footer />
        <ScrollToTop />
        <ToastContainer />
    </>
  )
}
