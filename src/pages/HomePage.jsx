import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Content from "../components/Content/Content";
import HomeGallery from "../components/Gallery/HomeGallery/HomeGallery";
import Hero from "../components/Hero/Hero";
import Pricing from "../components/Pricing/Pricing";
import Reviews from "../components/Reviews/Reviews";
import Team from "../components/Team/Team";

const Home = ({ cover }) => {
    window.scrollTo(0, 0);
    return (
        <>
            <Hero cover={cover} />
            <HomeGallery />
            <Content />
            <About />
            <Pricing />
            <Reviews />
            <Team />
            <Contact />
        </>
    );
};

export default Home;
