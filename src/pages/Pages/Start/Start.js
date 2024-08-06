"use client";

import styled from "styled-components";
import { FaPhone } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { LuBadgePercent } from "react-icons/lu";
import { RiExchangeDollarLine } from "react-icons/ri";
import { IoPhonePortraitSharp } from "react-icons/io5";

import { useMediaQuery } from "@react-hook/media-query";

import React from "react";

function Start1() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <Main>
      <div className="flex">
        <div
          className={
            isMobile ? "header-mob" : isTablet ? "header-mob" : "header"
          }
        >
          <div className="logo">Better Mortgage</div>
          <div className="contact">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <h3>Need help? Call (415) 523 8837</h3>
          </div>
        </div>
        <div
          className={isMobile ? "flex1-mob" : isTablet ? "flex1-mob" : "flex1"}
        >
          <h1>Hi, I'm Betty!</h1>
          <h1>What can I help you with?</h1>
          <div
            className={
              isMobile ? "btn-flex-mob" : isTablet ? "btn-flex-mob" : "btn-flex"
            }
          >
            <button
              className={
                isMobile ? "button-mob" : isTablet ? "button-mob" : "button"
              }
            >
              <div className="icon-flex">
                <IoHomeOutline className="icon" /> Buying a home
              </div>
            </button>
            <button
              className={
                isMobile ? "button-mob" : isTablet ? "button-mob" : "button"
              }
            >
              <div className="icon-flex">
                <MdOutlineMapsHomeWork className="icon" />
                Refinance my Mortgage
              </div>
            </button>
            <button
              className={
                isMobile ? "button-mob" : isTablet ? "button-mob" : "button"
              }
            >
              <div className="icon-flex">
                <MdOutlineAddHomeWork className="icon" />
                Get cash from my house
              </div>
            </button>
          </div>
        </div>
        <div
          className={isMobile ? "flex2-mob" : isTablet ? "flex2-mob" : "flex2"}
        >
          <div className="text">
            <h1>$100B</h1>
            <p>home loans funded entirely online</p>
          </div>
          <div className="text">
            <h1>400K</h1>
            <p>Customers who chose a Better Mortgage</p>
          </div>
        </div>
        <div
          className={isMobile ? "flex3-mob" : isTablet ? "flex3-mob" : "flex3"}
        >
          <p>After a few questions, you'll unlock:</p>
          <div className="icon-flex">
            <LuBadgePercent className="icon2" /> <p>Custom mortgage rates</p>
          </div>
          <div className="icon-flex">
            <RiExchangeDollarLine className="icon2" /> <p>Exclusive offers</p>
          </div>
          <div className="icon-flex">
            <IoPhonePortraitSharp className="icon2" />{" "}
            <p>A personalized dashboard</p>
          </div>
        </div>
      </div>
    </Main>
  );
}
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .flex3 {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    width: 35vw;
    margin: 30px;
    padding: 40px 10px 40px 150px;
    background-color: #f0f7f1;
  }
  .flex3-mob{
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    width: 90vw;
    margin: 30px;
    padding: 40px;
    background-color: #f0f7f1;
  }
  .flex2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 35vw;
    margin: 30px;
  }
  .flex2-mob {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 85vw;
    margin: 30px;
  }
  .flex2 .text {
    text-align: center;
  }
  .flex2-mob .text {
    text-align: center;
    margin: 20px;
  }
  .flex2 .text p {
    margin-top: 15px;
  }
  .icon {
    width: 30px;
    height: 30px;
    margin-right: 30px;
    margin-left: 30px;
  }
  .icon2 {
    width: 20px;
    height: 20px;
    margin-right: 30px;
  }
  .icon-flex {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .icon-flex-mob {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 95px;
  }
  .flex3 .icon-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
  .flex1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 180px;
  }
  .flex1-mob {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
  }
  .flex1-mob h1 {
    font-size: 25px;
  }
  .btn-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px;
  }
  .btn-flex-mob {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100px;
  }
  .button {
    padding: 15px 20px 15px 10px;
    line-height: 20px;
    border-radius: 10px;
    border: 1px solid black;
    font-size: 20px;
    width: 35vw;
    margin: 20px;
    background-color: transparent;
    &:hover {
      border: 4px solid #004733;
    }
  }
  .button-mob {
    padding: 15px;
    line-height: 15px;
    border-radius: 10px;
    border: 1px solid black;
    font-size: 16px;
    width: 85vw;
    margin: 20px;
    background-color: transparent;
    &:hover {
      border: 4px solid #004733;
    }
  }
  .header {
    position: fixed;
    top: 0;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    margin-top: 30px;

    z-index: 1000;
    border-bottom: 8px solid #fffdfa;
    border: none;
    width: 70vw;
  }
  .header-mob {
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-top: 20px;

    z-index: 1000;
    border-bottom: 8px solid #fffdfa;
    border: none;
    width: 100vw;
  }
  .header-mob h3 {
    display: none;
  }
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #2c5d3f;
  }
  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #2c5d3f;
  }
  .contact-icon {
    position: relative;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #2c5d3f;
    color: #2c5d3f;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #1ee07f;
      color: #292f36;
    }
  }
`;
export default Start1;
