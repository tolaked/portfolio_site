import React from 'react'
import styled from 'styled-components'
import profileImage from '../images/Tola.jpeg'


const AboutMeStyled = styled.div`
 h1 {
    margin-bottom: 15vh;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;

    .lineStyle {
      background-color: rgb(45, 57, 82);
      height: 1px;
      position: relative;
      margin-left: 2rem;
      margin-right: 2rem;
      width: 20%;
    }
  }

  .skewedDiv {
    position: absolute;
    left: 0px;
    background: #0b0a1d;
    min-height: 500px;
    width: 100%;
    transform: skewY(-3deg);
    pointer-events: none;
    z-index: -1;
  }

  .aboutMeContainer {
    display: flex;
    justify-content: space-between;
    padding-left: 7rem;
    padding-right: 7rem;
    align-items: center;
    margin:0 auto;

    .imgDiv {
      width: 30rem;
      height: 30rem;
      border-radius: 50%;
      border-width: 5px;
      border-style: solid;
      border-color: rgb(248, 248, 248);
      border-image: initial;
      overflow: hidden;
      margin: 0px;
     

      .imgWrapper {
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-bottom: 100%;
      }
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    p {
      width: 50%;
      text-align: left;
      font-size: 1.8rem;
      color: #a0aec0
    }
  }
`;

const About = () => {
  return (
    <AboutMeStyled id="about">
      <h1>
        <div className="lineStyle"></div>
        About Me
        <div className="lineStyle"></div>
      </h1>
      <div className="aboutMeContainer">
          
      <p>
          Hi I'm Adetola, an enthusiastic Software developer with an academic background in Mechanical Engineering.I am really passionate about building products.
          <br></br>
          <br></br>
          Through my experience at Lambda School, I've acquired the necessary skills and
          knowledge of modern web technologies needed to build web applications to solve problems.
          While hard engineering problems are often intrisically fun to tackle, I'm most attracted to solving real time problems. I'm looking for a software developer role where I can take on a major role in the development team, and gain relevant experience in software engineering.
          I am often captivated by new technologies and tools, as I like to always like to keep abreast with the latest technologies to update my skill set.
          
        </p>
        <div className="imgDiv">
          <div className="imageWrapper">
            <img src={profileImage} />
          </div>
        </div>
        
      </div>
    </AboutMeStyled>
  )
}

export default About;