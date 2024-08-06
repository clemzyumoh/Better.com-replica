


import Nav from '@/components/NavBar/NavBar'
import React from 'react'
import styles from "@/styles/Home.module.css";
import MortgageCalculator from '@/components/MortgageCalculator';
import Footer from '@/components/Footer';
import styled from "styled-components";




 function Mortgage() {
  return (
    <div className={styles.main}>
      <Main>
        <Nav />
        <MortgageCalculator />
        <Footer />
      </Main>
    </div>
  );
}
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0;

  width: 100vw;
  height: fit-content;
  background-color: #ffffff;
`;

export default Mortgage
