"use client";

import styled from "styled-components";
import { useMediaQuery } from "@react-hook/media-query";
import { PiArrowCircleRightLight } from "react-icons/pi";

import React from "react";

function ProductSec() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <Main>
      <div className="flex">
        <div
          className={isMobile ? "flex1-mob" : isTablet ? "flex1-mob" : "flex1"}
        >
          <h2>
            Got question? <br /> We've got anwsers
          </h2>
          <div className="btn-flex">
            <button
              className={
                isMobile
                  ? "active-btn-mob"
                  : isTablet
                  ? "active-btn-mob"
                  : "active-btn"
              }
            >
              Our Product
            </button>
            <button
              className={isMobile ? "btn1-mob" : isTablet ? "btn1" : "btn1"}
            >
              Calculator
            </button>
            <button
              className={isMobile ? "btn1-mob" : isTablet ? "btn1" : "btn1"}
            >
              Guides & FAQs
            </button>
          </div>
        </div>

        <div
          className={isMobile ? "flex2-mob" : isTablet ? "flex2-mob" : "flex2"}
        >
          <div
            className={
              isMobile ? "card1-mob" : isMobile ? "card1-mob" : "card1"
            }
          >
            <h2>
              Buy your first home with <br /> Better
            </h2>
            <PiArrowCircleRightLight className="icon" />
            <img
              className={isMobile ? "img" : isTablet ? "img" : ""}
              src="/Assets/Home-images/home.png"
              alt="images"
            />
          </div>
          <div
            className={
              isMobile ? "card2-mob" : isMobile ? "card2-mob" : "card2"
            }
          >
            <div
              className={
                isMobile
                  ? "card2-flex-mob"
                  : isTablet
                  ? " card2-flex-mob"
                  : "card2-flex"
              }
            >
              <h2>One Day Mortgage</h2>
              <p>
                It is a long established fact that a reader will be <br />
                dcontent of a page when looking at its layout. The point of{" "}
                <br /> using Lorem Ipsum is that it has a distribution of
                letters.
              </p>
              <PiArrowCircleRightLight className="icon" />
            </div>
            <img src="/Assets/Home-images/Oneday.png" alt="images" />
          </div>
        </div>

        <div
          className={isMobile ? "flex3-mob" : isTablet ? "flex3-mob" : "flex3"}
        >
          <div
            className={
              isMobile ? "card3-mob" : isMobile ? "card3-mob" : "card3"
            }
          >
            <img src="/Assets/Home-images/heloc.png" alt="images" />
            <div
              className={
                isMobile
                  ? "card2-flex-mob"
                  : isTablet
                  ? " card2-flex-mob"
                  : "card2-flex"
              }
            >
              <h2>Better HELOC</h2>
              <p>
                It is a long established fact that a reader will be <br />
                dcontent of a page when looking at its layout. The point of{" "}
                <br /> using Lorem Ipsum is that it has a distribution of
                letters.
              </p>
              <PiArrowCircleRightLight className="icon" />
            </div>
          </div>
          <div
            className={
              isMobile ? "card4-mob" : isMobile ? "card4-mob" : "card4"
            }
          >
            <h2>Insurance</h2>
            <PiArrowCircleRightLight className="icon" />
            <img
              className={isMobile ? "img" : isTablet ? "img" : ""}
              src="/Assets/Home-images/insurance.png"
              alt="images"
            />
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
  margin-top: 0px;
  width: 100vw;
  background-color: #ffffff;
  
  .flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    width: 100vw;
    margin-bottom: 80px;
  }
  .icon {
    position: relative;
    margin: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color: #004733;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    &:hover {
      background-color: #004733;
      color: #1ee07f;
      border: 1px solid #004733;
    }
  }
  .card2-flex {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    margin: 20px 50px 70px 20px;
  }
  .card2-flex-mob{
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    margin: 20px;
  }
  .card2-flex p {
    font-size: 15px;
  }
  .card2-flex h2 {
    margin-bottom: 35px;
  }
  .card1,
  .card4 {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    padding: 30px;
    background-color: #f0f7f1;
    width: fit-content;
    height: fit-content;
    margin: 30px 20px 30px 30px;
    padding: 30px 40px;
    border-radius: 15px;
    text-align: left;
  }
  .card1-mob,
  .card4-mob {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    padding: 30px;
    background-color: #f0f7f1;
    width: 95vw;
    height: fit-content;
    margin: 30px 20px 30px 30px;
    padding: 30px 20px;
    border-radius: 15px;
    text-align: left;
  }
  .card1-mob img,
  .card4-mob img {
    width: 85vw;
  }

  .card2,
  .card3 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f0f7f1;
    width: fit-content;
    height: fit-content;
    margin: 30px 20px 30px 20px;
    padding: 20px 40px;
    border-radius: 15px;
  }

  .card2-mob,
  .card3-mob {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    background-color: #f0f7f1;
    width: fit-content;
    height: fit-content;
    margin: 30px 20px 30px 20px;
    padding: 20px 20px;
    border-radius: 15px;
  }
  .card2-mob p,
  .card3-mob p {
    display: none;
  }
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .flex1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85vw;
  }
  .flex1-mob,
  .flex2-mob,
  .flex3-mob {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 85vw;
  }
  .flex3,
  .flex2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90vw;
  }

  .btn-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
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
  .btn1-mob {
    margin: 30px;
    padding: 10px 18px;
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
  .active-btn-mob {
    margin: 30px;
    padding: 10px 18px;
    background-color: transparent;
    color: black;
    border-radius: 15px;
    cursor: pointer;
    margin: 10px 5px;
    border: 5px solid #1c9a5b;
  }
`;

export default ProductSec;
