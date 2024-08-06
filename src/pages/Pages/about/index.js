"use client";

import styled from "styled-components";

//import Nav from "@/components/NavBar/NavBar";
import styles from "@/styles/Home.module.css";
import React from "react";
import Nav2 from "@/components/NavBar/Nav2";
import Hero from "./Hero";
import Story from "./Story";
import Footer from "@/components/Footer";

function About() {
  return (
    <div className={styles.main}>
      <Main>
        <Nav2/>
        <Hero/>
        <Story/>
        <Footer/>
      </Main>
    </div>
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
  background-color: #ffffff;
  

  
`;
export default About;
