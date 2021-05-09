import React from "react";
import styled from "styled-components";
import html5Icon from "../img/htmlIcon.svg";
import css3Icon from "../img/cssIcon.svg";
import jsIcon from "../img/jsIcon.svg";
import nodeIcon from "../img/nodejsIcon.svg";
import pythonIcon from "../img/pythonIcon.svg";
import reactIcon from "../img/reactIcon.svg";
import gitIcon from "../img/gitIcon.svg";
import devices from "../utils/devices"

const SkillStyled = styled.div`
  height: 100vh;
  padding-top: 15rem;

  @media ${devices.large} {
    padding-top: 8rem;
    height: 50vh;
  }

  @media ${devices.mobile} {
    height: auto;
  }

  h1 {
    margin-bottom: 15vh;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${devices.mobile} {
      margin-bottom: 5vh;
      font-size: 2rem;
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

  .firstSet,
  .secondSet {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 4rem;
  }

  .iconDiv {
    img {
      width: 10rem;
      height: 10rem;

      @media ${devices.mobile} {
        width: 5rem;
        height: 5rem;
      }
    }
  }
`;

const Skills = () => {
  return (
    <SkillStyled id="skills">
      <h1>
        <div className="lineStyle"></div>
        My Skillsets
        <div className="lineStyle"></div>
      </h1>
      <div className="firstSet">
        <div className="iconDiv">
          <img src={html5Icon} alt="html5"/>
        </div>
        <div className="iconDiv">
          <img src={css3Icon} alt="css3"/>
        </div>
        <div className="iconDiv">
          <img src={jsIcon} alt="jsicon"/>
        </div>
        <div className="iconDiv">
          <img src={reactIcon} alt="reacticon"/>
        </div>
      </div>
      <div className="secondSet">
        <div className="iconDiv">
          <img src={nodeIcon} alt='node icon'/>
        </div>
        <div className="iconDiv">
          <img src={pythonIcon} alt="python"/>
        </div>
        <div className="iconDiv">
          <img src={gitIcon} alt="giticon"/>
        </div>
     
      </div>
    </SkillStyled>
  );
};

export default Skills;
