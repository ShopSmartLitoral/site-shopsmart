import React, { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import CookiesPolice from "../components/CookiesPolice"
import styled from "styled-components";

const Container = styled.div`
`;

const Home = () => {

  const [cookies, setCookies] = useState(false)
  
  useEffect(() => {

    setTimeout(() => {
      setCookies(true)
    }, 5000)

  }, [])


  return (
    <Container>
      <Announcement />
      <Navbar />
      {cookies === false ? <CookiesPolice /> : <></>}
      <Slider />
      <Categories />
      <Products/>
      <Footer/>
    </Container>
  );
};

export default Home;
