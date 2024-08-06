"use client";

import Nav from "@/components/NavBar/NavBar";
import React from "react";
import Hero from "./Hero";
import styled from "styled-components";
import Testimonial from "./Testimonial";
import ProductSec from "./ProductSec";
import Footer from "@/components/Footer";

function Home1() {
  return (
    <Main>
      <Nav showGetStartedButton={true} />
      <Hero />
      <Testimonial/>
      <ProductSec/>
      <Footer/>
    </Main>
  );
}
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0;
  width: 100vw;
  height: fit-content;
  background-color: #004733;
`;
export default Home1;
