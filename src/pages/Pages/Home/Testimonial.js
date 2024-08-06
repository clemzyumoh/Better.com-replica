"use client";

import styled from "styled-components";
import { useMediaQuery } from "@react-hook/media-query";

import React from "react";

function Testimonial() {
  const isMobile = useMediaQuery("(max-width: 768px)");
   const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <Main>
      <div className={isMobile ? "flex-mob" : isTablet ? "flex" : "flex"}>
        <div
          className={isMobile ? "flex1-mob" : isTablet ? "flex1-mob" : "flex1"}
        >
          <img
            className={isMobile ? "img-mob" : isTablet ? "img" : "img"}
            src="/Assets/Home-images/Container-1.png"
            alt="images"
          />
          <div className="btn-flex">
            <button className="active-btn">Arian</button>
            <button className="btn1">Amanda</button>
            <button className="btn1">Paul</button>
          </div>
        </div>
        <div
          className={isMobile ? "flex2-mob" : isTablet ? "flex2-mob" : "flex2"}
        >
          <h1 className={isMobile ? "h1-mob" : isTablet ? "h1-mob" : "h1"}>
            Find out why
            <br /> we're better.
          </h1>
          <button className="btn2">See all our stories</button>
          <div
            className={isMobile ? "img2-mob" : isTablet ? "img2-mob" : "img"}
          >
            {" "}
            <img src="/Assets/Home-images/Container.png" alt="images" />
          </div>
        </div>
      </div>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0;
  width: 100vw;
  padding: 100px 20px 20px 20px;
  height: fit-content;
  background-color: #ffffff;
  .flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 0;
    width: 100vw;
    padding: 100px 20px 20px 20px;
    height: fit-content;
    background-color: #ffffff;
  }
  .img-mob {
    width: 80vw;
  }
  .img2-mob {
    margin-left: 250px;
    margin-right: 0px;

  }
  .flex-mob {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 0;
    width: 90vw;
    height: fit-content;
    background-color: #ffffff;
  }
  .flex1 {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    margin: 30px 10px 30px 70px;
  }
  .flex1-mob {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    padding: 10px;
  }
  .flex2 {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    margin: 30px 60px 30px 10px;
  }
  .flex2-mob {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    text-align: center;
  }
  .h1 {
    font-size: 90px;
  }
  .h1-mob {
    font-size: 50px;
  }
  .btn-flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn2 {
    margin: 30px;
    padding: 20px 40px;
    background-color: #004733;
    color: whitesmoke;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      color: whitesmoke;
      background-color: #1c9a5b;
    }
  }
  .btn1 {
    margin: 30px;
    padding: 15px 30px;
    background-color: transparent;
    color: black;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    border: 1px solid whitesmoke;
    margin: 10px 5px;

    &:hover {
      color: black;
      background-color: transparent;
      border: 5px solid #1c9a5b;
    }
  }
  .active-btn {
    margin: 30px;
    padding: 15px 30px;
    background-color: transparent;
    color: black;
    border-radius: 15px;
    cursor: pointer;
    margin: 10px 5px;
    border: 5px solid #1c9a5b;
  }
`;
export default Testimonial;
