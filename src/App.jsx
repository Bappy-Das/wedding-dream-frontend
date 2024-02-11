import { useCallback, useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import PricingDetails from "./components/Pricing/PricingDetails";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TeamPage from "./pages/TeamPage";
import { Toaster } from "react-hot-toast";
import PackagesPage from "./pages/PackagesPage";
import VideoGalleryPage from "./pages/VideoGalleryPage";
import Loader from "./components/Loader/Loader";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const handleFetch = useCallback(() => {
        fetch("https://weeding-archive.onrender.com/cover")
            .then((res) => res.json())
            .then((result) => setData(result.data))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        handleFetch();
    }, [handleFetch]);

    useEffect(() => {
        AOS.init();
      }, [])
    if (loading) {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                <Loader/> 
                {/* <div className="lds-heart">
                    <div></div>
                </div> */}
            </div>
        );
    }
    return (
        
        <BrowserRouter>
            <div className="justify-center flex-col min-h-screen bg-coal overflow-hidden">
            {/* <div className="justify-center flex-col min-h-screen bg-coal overflow-x-hidden"> */}
                <Nav />
                <Routes>
                    <Route path="*" element={<div>Not Found</div>} />
                    <Route path="/" element={<Home cover={data} />} />
                    <Route path="/gallery" element={<GalleryPage />}/>
                    <Route path="/cinematography" element={<VideoGalleryPage />}/>
                    <Route path="/packages" element={<PackagesPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/package/:id" element={<PricingDetails />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Footer />
            </div>
            <Toaster position="top-right"/>
        </BrowserRouter>
    );
}
export default App;
