"use client";

import styled from "styled-components";
import { useMediaQuery } from "@react-hook/media-query";
import { ImHome } from "react-icons/im";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import React from "react";

function Footer() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <Main>
      <div className="flex">
        <div
          className={isMobile ? "flex1-mob" : isTablet ? "flex1-mob" : "flex1"}
        >
          <div className="better">
            <div className="bet-flex">
              <h1>Better</h1>
              <p>
                There are many variations of Lorem Ipsum available,
                <br />
                but the majority alteration in some form
              </p>
            </div>
            <div className="bet-flex">
              <h2>
                <span>Better</span>
                {"    "} Mortgage
              </h2>
              <p>
                There are passages of Lorem Ipsum available,
                <br />
                but thealteration in some form
              </p>
            </div>
            <div className="bet-flex">
              <h2>
                <span>Better</span> {"  "} Real Estate
              </h2>
              <p>
                There are passages of Lorem Ipsum available,
                <br />
                but suffered alteration in some form
              </p>
            </div>{" "}
            <div className="bet-flex">
              <h2>
                <span>Better</span> {"  "} Cover
              </h2>
              <p>
                There passages of Lorem Ipsum available,
                <br />
                but the alteration in some form
              </p>
            </div>{" "}
            <div className="bet-flex">
              <h2>
                <span>Better</span> {"  "} Inspect
              </h2>
              <p>
                There are passages of Lorem Ipsum available,
                <br />
                but the majority in some form
              </p>
            </div>{" "}
            <div className="bet-flex">
              <h2>
                <span>Better</span> {"  "} Settlement Services
              </h2>
              <p>
                There are passages of Lorem Ipsum available,
                <br />
                suffered alteration in some form
              </p>
            </div>
          </div>
          <div className="resource">
            <h1>Resources</h1>
            <p>
              Contrary to popular belief,
              <br /> Lorem Ipsum is not <br /> simply random text.
              <br /> It has roots in a piece <br />
              of classical Latin literature <br />
              from 45 BC, making it over 2000 years old.
              <br /> Richard McClintock,mHampden-Sydney
              <br /> more obscure Latin words,
              <br /> consectetur, from a Lorem <br />
              Ipsum passage, and going through
              <br /> the cites of the word in <br />
              classical literature, discovered
              <br /> the undoubtable source.
            </p>
          </div>
          <div className="company">
            <h1>Company</h1>
            <p>
              About Us <br /> Careers <br /> Media <br /> Partner With Us <br />
              Learning center <br />
              FAQs <br />
              Investor Relations
            </p>
          </div>
          <div className="contact">
            <h1>Contact Us</h1>
            <p>
              hello@better.com <br />
              415-523-8837
              <br /> FAQ <br />
              Glossary
              <br /> Legal
              <br /> NMLS Consumer Access <br />
              Privacy Policy <br />
              Terms of Use
              <br /> Disclosures & Licensing <br />
              Affiliated Business
              <br /> Browser Disclaimer
            </p>
            <div className="icon-flex">
              <ImHome className="icon-h" />
              <ImHome className="icon-h" />
            </div>
          </div>
        </div>
        <div
          className={isMobile ? "flex2-mob" : isTablet ? "flex2-mob" : "flex2"}
        >
          <div className="icon-flex">
            <LuFacebook className="icon-f" />
            <FaInstagram className="icon-i" />
            <FiLinkedin className="icon-l" />
          </div>
          <div className="text-flex1">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
              <br />
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
              <br />
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
            </p>
          </div>
          <div className="text-flex2">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
              <br />
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
              <br />
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
              <br />
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
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
  background-color: #fffdfa;
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: left;
    width: 100vw;
  }
  .text-flex1,
  .text-flex2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    margin-left: 40px;
  }
  .better,
  .resource,
  .company,
  .contact {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
  }
  .resource p,
  .contact p,
  .company p {
    line-height: 80px;
    margin-top: 20px;
  }
  .flex1-mob .resource p,
  .flex1-mob .contact p,
  .flex1-mob .company p {
    line-height: 40px;
    margin-top: 10px;
  }
  .contact {
    margin-bottom: 50px;
    margin-right: 50px;
  }
  .company {
    margin-bottom: 180px;
  }
  .bet-flex {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    margin: 15px;
  }
  .better h1,
  span {
    color: #1ee07f;
  }
  .better {
    margin-left: 60px;
  }
  .flex1-mob .better,
  .flex1-mob .resource,
  .flex1-mob .company,
  .flex1-mob .contact {
    margin: 20px;
  }
  .flex1 p {
    line-height: 30px;
    font-size: 15px;
  }
  .flex1 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 60px auto 40px;
    width: 100vw;
  }
  .flex1-mob {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
  }
  .flex2 {
    display: flex;
    justify-content: start;
    align-items: start;
    margin: 20px auto;
    flex-direction: column;
    padding: 20px 150px;
    width: 100vw;
  }
  .flex2-mob {
    display: flex;
    justify-content: start;
    align-items: start;
    margin: 20px auto;
    flex-direction: column;
    width: 100vw;
  }
  .flex2 p {
    margin: 50px auto;
    line-height: 25px;
    font-size: 12px;
  }

  .icon-h,
  .icon-f,
  .icon-i,
  .icon-l {
    width: 40px;
    height: 40px;
    margin: 0px 10px;
  }
`;
export default Footer;
