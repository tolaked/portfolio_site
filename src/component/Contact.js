import React from "react";
import styled from "styled-components";
import devices from "../utils/devices";

const ContactStyled = styled.div`
  margin-top: 150vh;
  height: 90vh;
  padding-top: 10rem;
  position: relative;

  @media ${devices.large} {
    margin-top: 80vh;
    padding-top: 3rem;
    position: static;
    height: auto;
  }
  @media ${devices.tablet} {
    position: static;
  }

  h1 {
    margin-bottom: 15vh;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${devices.mobile} {
      margin-bottom: 5vh;
    }

    .lineStyle {
      background-color: rgb(45, 57, 82);
      height: 1px;
      position: relative;
      margin-left: 2rem;
      margin-right: 2rem;
      width: 20%;
    }
  }

  p {
    width: 50%;
    text-align: center;
    margin-left: 25%;
    color: #a0aec0;
    font-size: 2rem;

    @media ${devices.mobile} {
      width: 100%;
      margin-left: 3rem;
    }
  }
  button {
    margin-top: 8rem;
    color: white;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
    background: #38b2ac;
    margin-bottom: 3rem;
    font-size: 1.8rem;

    :hover {
      background: #a0aec0;
    }
  }
`;

const Contact = () => {
  return (
    <ContactStyled id="contact">
      <h1>
        <div className="lineStyle"></div>
        Get In Touch
        <div className="lineStyle"></div>
      </h1>
      <div>
        <p>
          Please feel free to contact me for an opportunity to work with you.
        Hit the connect button to drop a message.
        </p>
      </div>
      <a href="mailto:adetolaakere1@gmail.com">
        <button>Connect With Me</button>
      </a>
    </ContactStyled>
  );
};

export default Contact;
