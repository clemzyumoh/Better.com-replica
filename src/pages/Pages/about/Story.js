"use client";

import styled from "styled-components";
import { useMediaQuery } from "@react-hook/media-query";


import React from 'react'

 function Story() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <Main>
      <div className="flex">
        <div className={isMobile ? "flex1-mob": isTablet ? "flex1-mob": "flex1"}>
          <div className="text">
            <h1>The status quo is broken</h1>
            <p>
              It is a long established fact that a reader will be distracted{" "}
              <br /> by the readable content of a page when looking at its
              layout.
              <br />
              The point of using Lorem Ipsum is that it has a more-or-less{" "}
              <br />
              normal distribution of letters, as opposed to using 'Content
            </p>
            <button>Read Vishal's Story</button>
          </div>
          <div className="img">
            <img src="/Assets/About-images/Group 1.png" alt="images" />
          </div>
        </div>
        <div className="flex2">
          <div className="text-flex">
            <h1>How we're changing things</h1>
            <div>
              {" "}
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. 
              </p>
            </div>
          </div>
        </div>
        <div className="flex3">
          
            <img className="img1" src="/Assets/About-images/Section-1.png" alt="images" />
          
          
            <img  className="img2" src="/Assets/About-images/Section.png" alt="images" />
          
        </div>
      </div>
    </Main>
  );
}


const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  background-color: #ffffff;
  height: fit-content;
  width: 100vw;
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: fit-content;
    width: 100vw;
  }
  .img1,
  .img2 {
    width: 90vw;
    margin: 20px auto;
  }
  .flex3 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .flex1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65vw;
    height: fit-content;
    text-align: left;
  }
  .flex1-mob {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 85vw;
    height: fit-content;
    text-align: left;
  }
  .flex2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    color: whitesmoke;
    background-color: #017848;
    padding: 50px;
    margin: 70px 0px 50px;
  }
  .text-flex {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    margin: 20px auto;
    width: 70vw;
  }
  .text-flex h1 {
    margin: 30px;
  }
  .text {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    margin-bottom: 180px;
  }
  .text p,
  .text-flex p {
    font-size: 15px;
    line-height: 25px;
    margin: 20px;
    text-align: left;
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
export default Story
