"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import GetStartedButton from "../getStartedBtn";

function NavBar2({ showGetStartedButton }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  //const isStartPage = router.pathname === "/Pages/Start";

   const handleStartClick = () => {
    router.push("/Pages/Start");
   }
  //  const navigate = (path) => {
  //    router.push(path);
  //  };
  return (
    <StyledNavBar2>
      <div className={`nav-container ${isMenuOpen ? "menu-open" : ""}`}>
        {!isMenuOpen ? (
          <div className="nav-content">
            <div className="left-side">
              <div className="logo">Better</div>
            </div>
            <div className="right-side">
              <div className="contact-icon">
                <FaPhone />
              </div>
              
              
              <button
                className={`get-started ${
                  router.pathname === "/Pages/Start" ? "hidden" : ""
                }`}
                onClick={handleStartClick}
              >
                Get Started
              </button> 
              <div className="menu-icon" onClick={() => setIsMenuOpen(true)}>
                <FaBars />
              </div>
            </div>
          </div>
        ) : (
          <div className="menu-dropdown">
            <div className="menu-header">
              <div className="logo">Logo</div>
              <div className="menu-close" onClick={() => setIsMenuOpen(false)}>
                <FaTimes />
              </div>
            </div>
            <div className="menu-items">
              <Link href="/">Home</Link>
              <Link href="/Pages/Mortgage-Cal">Mortgage</Link>
              <Link href="/Pages/about">About</Link>
            </div>
          </div>
        )}
      </div>
    </StyledNavBar2>
  );
}

export default NavBar2;

const StyledNavBar2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  background-color: #004733;
  color: white;
  margin-top: 0px;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .nav-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .nav-content {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .left-side {
    display: flex;
    align-items: center;
  }

  .logo {
    font-size: 23px;
    color: #1ee07f;
  }

  .right-side {
    display: flex;
    align-items: center;
  }
  button {
    display: inline;
    margin-left: 15px;
    padding: 10px 20px;
    background-color: #1ee07f;
    color: black;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: transparent;
      color: #1ee07f;
      border: 1px solid #1ee07f;
    }

    &:disabled {
      background-color: gray;
      cursor: not-allowed;
      color: white;
    }
  }
  .contact-icon {
    font-size: 18px;
    margin-right: 15px;
    padding: 6px;
    border-radius: 50%;
    border: 1px solid #1ee07f;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1ee07f;
  }

  .menu-icon {
    font-size: 24px;
    cursor: pointer;
    margin: 10px;
  }

  .menu-dropdown {
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 0px;
    width: 100%;
    height: 100vh; /* Full height */
    background-color: #004733;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    box-sizing: border-box;

    .menu-header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 150px; /* Remove margin-top */
      margin-bottom: 200px;
    }

    .menu-close {
      font-size: 24px;
      cursor: pointer;
    }

    .menu-items {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 300px;
      a {
        display: block;
        padding: 20px;
        text-decoration: none;
        color: white;
        font-size: 24px;
        transition: background-color 0.3s;

        &:hover {
          background-color: #1ee07f;
          color: #292f36;
        }
      }
    }
  }
`;
