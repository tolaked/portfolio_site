import React from "react";
import styled from "styled-components";
import profileImg from "../img/Picture.png";
import devices from "../utils/devices";


const AboutMeStyled = styled.div`
  padding-top: 10rem;
  height: 100vh;

  @media ${devices.large} {
    height: auto;
  }

  h1 {
    margin-bottom: 15vh;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${devices.mobile} {
      font-size: 2rem;
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

  .aboutMeContainer {
    display: flex;
    justify-content: space-between;
    padding-left: 7rem;
    align-items: flex-start;

    @media ${devices.tablet} {
      flex-direction: column;
      justify-content: none;
      align-items: center;
      padding-left: 0rem;
    }

    .imgDiv {
      width: 30%;
      height: 38rem;
      border-radius: 1rem;
      border-width: 5px;
      box-shadow: 8px 7px 6px -4px #0b0a1d;
      border-image: initial;
      overflow: hidden;
      margin: 0px;


      img {
        max-width: 100%;
        max-height: 100%;
        transition-delay: 500ms;
        object-fit: cover;
        object-position: center center;
      }

      @media ${devices.tablet} {
        width: 90%;
        height: 55rem;
      }

      @media ${devices.mobile} {
        height: 45rem;
      }
     
    }
    p {
      width: 50%;
      text-align: left;
      font-size: 1.8rem;
      color: #a0aec0;

      @media ${devices.tablet} {
        width: 90%;
        margin-top: 2rem;
      }
    }
  }
`;

const AboutMe = () => {
  return (
    <AboutMeStyled id="about-me">
      <h1>
        <div className="lineStyle"></div>
        About Me
        <div className="lineStyle"></div>
      </h1>
      <div className="aboutMeContainer">
        <div className="imgDiv">
          <div className="imageWrapper">
            <img src={profileImg} style={{height: "300px",width: "800px"}}/>
          </div>
        </div>
        <p>
        Hi I'm Adetola, an enthusiastic Software developer with an academic background in Mechanical Engineering. I am proficient at developing and creating scalable software solutions for a wide range of industries.
          <br></br>
          <br></br>
          I have the necessary skills and
          knowledge of modern web technologies needed to build web applications to solve problems.
          While hard engineering problems are often intrinsically fun to tackle, I am mostly attracted to solving real-time problems. 
          I am often captivated by new technologies and tools, as I like to always keep abreast of the latest technologies to update my skill set.
          <br></br>
          <br></br>
          When I'm not writing code or doing anything work related, I watch football , play video games or hangout with friends and family.
        </p>
      </div>
    </AboutMeStyled>
  );
};

export default AboutMe;
