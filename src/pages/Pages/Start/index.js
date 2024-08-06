
"use client";


import React from "react";
import styled from "styled-components";
import styles from "@/styles/Home.module.css";
import Start1 from "./Start";
import Footer from "@/components/Footer";


function Start() {

  return (
    <div className={styles.main}>
      <Main>
        <Start1/>
        <Footer/>
      </Main>
    </div>
  );
}
export default Start



const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0;
  width: 100vw;
  height: fit-content;
  background-color: #fffdfa;
`;