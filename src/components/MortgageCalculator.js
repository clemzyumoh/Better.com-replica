"use client";
import styled from "styled-components";
import { useMediaQuery } from "@react-hook/media-query";


import { useState, useEffect } from "react";
const calculateMonthlyPayment = (homePrice) => {
  const percentage = 0.01764; 
  return homePrice * percentage;
};

const MortgageCalculator = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isTablet = useMediaQuery("(max-width: 1024px)");
  const [homePrice, setHomePrice] = useState(50000);
  const [downPayment, setDownPayment] = useState(10000);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [zipCode, setZipCode] = useState("");
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanLength, setLoanLength] = useState(30);

  useEffect(() => {
    
    const newDownPayment = homePrice * 0.2;
    setDownPayment(newDownPayment);
    const newMonthlyPayment = calculateMonthlyPayment(homePrice);
    setMonthlyPayment(newMonthlyPayment.toFixed(2));
  }, [homePrice, interestRate, loanLength]);

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setHomePrice(value);
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setHomePrice(value);
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(parseFloat(event.target.value));
  };

  const handleLoanLengthChange = (event) => {
    setLoanLength(parseInt(event.target.value, 10));
  };

  return (
    <Main>
      <div className="flex">
        <div className="text-flex">
          <h1>Mortgage Calculator</h1>
          <p>
            Use our mortgage calculator built directly into it! Get accurate
            estimates for your monthly mortgage <br />
            payments if you will be required to have private mortgage insurance
            (PMI). Also learn why
          </p>
        </div>
        <div
          className={isMobile ? "flex1-mob" : isTablet ? "flex1-mob" : "flex1"}
        >
          <div className="home-flex">
            {" "}
            <label>Home Price</label>
            <input
              type="number"
              value={homePrice}
              onChange={handleInputChange}
            />
          </div>
          <div className="month-flex">
            <p style={{ marginRight: "10px" }}>
              Monthly Payment: ${monthlyPayment}/Month
            </p>
          </div>
          <button>Get Pre-approved</button>
        </div>
        <div className="slider">
          <input
            type="range"
            min="50000"
            max="3000000"
            step="1000"
            value={homePrice}
            onChange={handleSliderChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />
        </div>
        <div
          className={isMobile ? "flex2-mob" : isTablet ? "flex2-mob" : "flex2"}
        >
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Zip Code"
            style={{ marginRight: "10px" }}
          />
          <div className="percent">
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(parseInt(e.target.value, 10))}
              style={{ marginRight: "10px" }}
            />
            <p>20%</p>
          </div>
          <input
            type="number"
            value={interestRate}
            onChange={handleInterestRateChange}
            step="0.01"
          />
          <select value={loanLength} onChange={handleLoanLengthChange}>
            <option value={30}>30 Years</option>
            <option value={20}>20 Years</option>
            <option value={15}>15 Years</option>
          </select>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0;
  width: 100vw;
  height: fit-content;
  background-color: #f0f7f1;
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .text-flex {
    display: flex;
    justify-content: space-around;
    align-items: start;
    flex-direction: column;
    margin: 30px;
    margin-left: 30px;
    width: 80vw;
  }
  .percent {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .percent p {
    font-size: 20px;
  }
  .flex1,
  .flex2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90vw;
    margin: 40px;
  }
  .flex1-mob,
  .flex2-mob {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 90vw;
    margin: 40px;
  }
  .flex1-mob .home-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 95vw;
    margin: 0px auto 30px;
  }
  .flex2 {
    padding: 30px;
  }
  .home-flex {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
  }
  .home-flex label,
  .month-flex p {
    font-size: 20px;
  }
  input {
    padding: 20px;
    line-height: 20px;
    border-radius: 10px;
    border: 1px solid black;
    font-size: 30px;
    &:hover {
      border: 4px solid #004733;
    }
  }
  .flex1-mob input {
    padding: 20px;
    line-height: 20px;
    border-radius: 10px;
    border: 1px solid black;
    font-size: 20px;
  }
  .flex2 input,
  select {
    padding: 15px;
    line-height: 15px;
    border-radius: 10px;
    font-size: 20px;
    border: 1px solid black;
    &:hover {
      border: 4px solid #004733;
    }
  }
  .flex2-mob input {
    padding: 15px;
    line-height: 15px;
    border-radius: 10px;
    font-size: 18px;
    width: 75vw;
    margin: 20px;
    border: 1px solid black;
    &:hover {
      border: 4px solid #004733;
    }
  }
  .slider {
    width: 80vw;
    color: #004733;
  }
  .flex1-mob button {
    margin-top: 30px;
  }
  button {
    margin-left: 15px;
    padding: 15px 30px;
    background-color: #1c9a5b;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #004733;
    }
  }
`;
export default MortgageCalculator;
