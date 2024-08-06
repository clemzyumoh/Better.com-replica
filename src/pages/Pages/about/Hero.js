"use client";

import styled from "styled-components";
import { useMediaQuery } from "@react-hook/media-query";


import React from 'react'

function Hero() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <Main>
      <div className={isMobile ? "flex-mob" : isTablet ? "flex-mob":"flex"}>
        <h2>Our Mission</h2>
        <h1>
          We're making homeownership easier ,<br /> faster and most importantly,
          more assessble
          <br /> for all Americans.
        </h1>
      </div>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0;
  background-color: #ffffff;
  height: fit-content;
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: max-content;
    margin-top: 200px;
    margin-bottom: 300px;
  }
  .flex-mob {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90vw;
    height: max-content;
    margin-top: 50px;
    margin-bottom: 80px;
  }
  h2 {
    color: #1c9a5b;
    font-size: 30px;
    margin-bottom: 30px;
  }
  h1 {
    font-size: 45px;
    margin-bottom: 30px;
    text-align: center;
  }
  .flex-mob h1 {
    font-size: 38px;
    margin-bottom: 50px;
    text-align: center;
  }
`;

export default Hero
