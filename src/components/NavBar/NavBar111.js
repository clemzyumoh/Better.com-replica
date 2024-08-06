"use client";


import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";


function NavBar111() {
  const router = useRouter();
  const isStartPage = router.pathname === "/Pages/Start";

  const navigate = (path) => {
    router.push(path);
   };
 
  return (
    <div>
      <Main>
        <div className="nav-container">
          <div className="left-side">
            <div className="logo">Better</div>
            <div className="nav-items">
              <div className="nav-item">
                <Link href="/">Home</Link>
              </div>
              <div className="nav-item">
                <Link href="/Pages/Mortgage-Cal">Mortgage</Link>
              </div>
              <div className="nav-item">
                <Link href="/Pages/about">About</Link>
              </div>
              <div className="nav-item">
                <Link href="/Pages/Start">Get Started</Link>
              </div>
              <div className="nav-item">
                <span>Menu</span>
                <div className="dropdown-menu">
                  <div className="dropdown-item">
                    <Link className="link" href="/buy">
                      Buy
                    </Link>
                    <div className="sub-dropdown">
                      <Link href="/apply-now">Apply Now</Link>
                      <Link href="/purchase-rates">Purchase Rates</Link>
                      <Link href="/affordability-calculator">
                        Affordability Calculator
                      </Link>
                      <Link href="/mortgage-calculator">
                        Mortgage Calculator
                      </Link>
                      <Link href="/rent-vs-buy-calculator">
                        Rent vs Buy Calculator
                      </Link>
                      <Link href="/find-an-agent">Find an Agent</Link>
                      <Link href="/va-loans">VA Loans</Link>
                      <Link href="/learning-center">Learning Center</Link>
                    </div>
                  </div>
                  <div className="dropdown-item">
                    <Link className="link" href="/refinance">
                      Refinance
                    </Link>
                    <div className="sub-dropdown">
                      <Link href="/apply-now">Apply Now</Link>
                      <Link href="/refinance-rates">Refinance Rates</Link>
                      <Link href="/cash-out-refinance-calculator">
                        Cash-out Refinance Calculator
                      </Link>
                      <Link href="/learning-center">Learning Center</Link>
                    </div>
                  </div>
                  <div className="dropdown-item">
                    <Link className="link" href="/heloc">
                      HELOC
                    </Link>
                    <div className="sub-dropdown">
                      <Link href="/apply-now">Apply Now</Link>
                      <Link href="/calculate-your-cash">
                        Calculate Your Cash 💵
                      </Link>
                      <Link href="/heloc-vs-cash-out-refinance">
                        HELOC vs. Cash-out Refinance
                      </Link>
                      <Link href="/learning-center">Learning Center</Link>
                    </div>
                  </div>
                  <div className="dropdown-item">
                    <Link className="link" href="/rates">
                      Rates
                    </Link>
                    <div className="sub-dropdown">
                      <Link href="/purchase-mortgage-rates">
                        Purchase Mortgage Rates
                      </Link>
                      <Link href="/refinance-rates">Refinance Rates</Link>
                      <Link href="/refinance-cash-out-rates">
                        Refinance Cash-out Rates
                      </Link>
                      <Link href="/heloc-rates">HELOC Rates</Link>
                      <Link href="/purchase-va-rates">Purchase VA Rates</Link>
                    </div>
                  </div>
                  <div className="dropdown-item">
                    <Link className="link" href="/better">
                      Better+
                    </Link>
                    <div className="sub-dropdown">
                      <Link href="/get-insurance">Get Insurance</Link>
                      <Link href="/title-and-closing">Title and Closing</Link>
                      <Link href="/better-attorney-match">
                        Better Attorney Match
                      </Link>
                      <Link href="/learning-center">Learning Center</Link>
                      <Link href="/better-agent-match">Better Agent Match</Link>
                      <Link href="/for-agents">For Agents</Link>
                      <Link href="/better-duo">Better Duo</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="contact-icon">
              <FaPhone />
              <div className="contact-dropdown">
                Call us anytime at 415-523-8837
              </div>
            </div>
            <button className="sign-in">Sign In</button>
            <button className="button" onClick={() => navigate("/Pages/Start")}>
              Get Started
            </button>
          </div>
        </div>
      </Main>
    </div>
  );
}

export default NavBar111;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  padding: 0px;
  width: 100vw;
  margin-top: 0px;
  z-index: 1000;
  background-color: #ffffff;
  color: black;
  border-bottom: none;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    border-bottom: none;
    width: 100%;
  }

  .left-side {
    display: flex;
    align-items: center;
  }

  .logo {
    font-size: 23px;
    color: #1ee07f;
    margin-right: 20px;
  }
  .dropdown-item .link {
    color: #292f36;

    &:hover {
      color: whitesmoke;
    }
  }
  .nav-items {
    display: flex;
    align-items: center;
  }
  .nav-item a {
    color: black;
  }
  .nav-item {
    position: relative;
    margin: 0 15px;
    cursor: pointer;
    color: black;
    padding: 10px 15px;
    display: flex;
    align-items: center;

    &:hover .dropdown-menu {
      display: block;
    }

    & > span {
      display: flex;
      align-items: center;
      margin-right: 10px;
    }

    & > span::after {
      content: "→";
      margin-left: 10px;
      font-size: 0.75em;
      color: #004733; /* Hide arrow initially */
      transition: transform 0.3s, color 0.3s;
    }

    &:hover > span::after {
      color: #004733; /* Show arrow on hover */
      transform: rotate(90deg);
    }
  }

  .dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: whitesmoke;
    min-width: 300px;
    border: 1px solid whitesmoke;
    border-radius: 8px;
    z-index: 1;
    padding: 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  .dropdown-item {
    position: relative;

    &:hover .sub-dropdown {
      display: block;
      color: whitesmoke;
    }
  }
  .sub-dropdown a {
    color: black;
  }
  .sub-dropdown {
    display: none;
    position: absolute;
    left: 100%; /* Positioned to the right of the parent dropdown */
    top: 0;
    color: black;
    background-color: whitesmoke;
    border: 1px solid whitesmoke;
    min-width: 250px;
    margin-left: 10px;
    border-radius: 8px;
    z-index: 2;
    padding: 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  a {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    text-decoration: none;
    justify-content: space-between;
    background-color: transparent;
    border-radius: 8px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #004733;
      color: whitesmoke;
    }

    &::after {
      content: "→";
      font-size: 0.75em;
      color: transparent; /* Hide arrow initially */
      transition: color 0.3s;
    }

    &:hover::after {
      color: #1ee07f; /* Show arrow on hover */
    }
  }

  .right-side {
    display: flex;
    align-items: center;
  }

  .button {
    margin-left: 15px;
    padding: 20px 30px;
    background-color: #004733;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: transparent;
      color: black;
      border: 1px solid #004733;
    }
  }

  .sign-in {
    background: none;
    border: none;
    color: black;
    font-size: 16px;
    cursor: pointer;
    margin-right: 15px;
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
    border: 1px solid #15dec2;
    color: #004733;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #004733;
      color: whitesmoke;
    }

    &:hover .contact-dropdown {
      display: block;
    }
  }

  .contact-dropdown {
    display: none;
    position: absolute;
    top: 120%;
    right: 20px;
    background-color: whitesmoke;
    color: black;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    z-index: 1;
    white-space: nowrap;
  }
`;
