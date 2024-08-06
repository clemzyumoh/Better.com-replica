
"use client";

import styled from "styled-components";
import { useMediaQuery } from "@react-hook/media-query";

import React from 'react'

function Hero() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <Main>
      <h1 className={isMobile ? "h1-mob" : isTablet ? "h1-mob": "h1"}>
        Mortgage <br /> Made Simple
      </h1>
      <div className={isMobile ? "flex-mob" : isTablet? "flex-mob" : "flex"}>
        <div className="btn-flex">
          <button>Start My Approval</button>
          <p>3min | no credit impact</p>
        </div>
        <img className={isMobile ? "img-mob" : isTablet ? "img-mob" : "img"} src="/Assets/Home-images/Margin.png" alt="images" />
        <img src="/Assets/Home-images/Margin-1.png" alt="images" />
      </div>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #004733;
  text-align: center;
  margin-top: 0;
  width: 100vw;
  color: #1ee07f;
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .flex-mob {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .h1 {
    font-size: 120px;
    position: relative;
    top: 150px;
  }
  .h1-mob{
    font-size: 60px;
    margin: 40px;
  }
  p {
    font-size: 12px;
    margin: 5px;
  }
  .btn-flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    color: whitesmoke;
  }

  button {
    margin-left: 15px;
    padding: 20px 40px;
    background-color: #1ee07f;
    color: black;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: transparent;
      color: #1ee07f;
      border: 1px solid #1ee07f;
    }
  }
  .img-mob{
    width: 90vw;
  }
`;
export default Hero