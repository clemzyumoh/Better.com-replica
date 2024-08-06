
"use client";


import Link from "next/link";
import styled from "styled-components";

const GetStartedButton= ({ href, children }) => (
  <Link href={href} passHref>
    <Button>{children}</Button>
  </Link>
);

export default GetStartedButton;

const Button = styled.button`
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
`;
