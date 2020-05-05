import React from "react";
import styled from "styled-components";
import resume from "../images/resume.jpg";
import devices from "../utils/devices";

const TopStyled = styled.div`
  display: flex;
  padding-top: 7rem;
  height: 60vh;
  text-align: left;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 15rem;
  width: 100%;
  /* @media ${devices.large} {
    flex-direction: column;
    align-items: center;
    justify-content: none;
    height: auto;
  }

  @media ${devices.tablet} {
    flex-direction: column;
    padding-top: 10rem;
    align-items: center;
    justify-content: none;
    height: auto;
  } */

  @media ${devices.mobile} {
    padding-top: 5rem;
  }

  .left-section {
    width: 58%;
    margin-left: 10rem;
    @media ${devices.mobile} {
      margin-left: 5rem;;
  }
    h1 {
      font-weight: 900;
      font-size: 60px;
      @media ${devices.mobile} {
        font-weight: 900;
        font-size: 4rem;
        width:350px
      }


    }

    h3 {
      color: #ffffff;
      font-size: 2.2rem;
      @media ${devices.mobile} {
        font-weight: 300;
        letter-spacing: 2px;
        font-size: 18px;
        width:400px;
      }
    }
    h4 {
      color: #38b2ac;
    }
    .button {
      margin-top: 3rem;
      color: white;
      padding: 1rem;
      border-radius: 5px;
      border-style: none;
      cursor: pointer;
      background: #38b2ac;
      margin-bottom: 3rem;

      a {
        background: none;
        text-decoration: none;
        color: white;
      }
    }

    img {
      max-width: 3rem;
      height: 3rem;
    }
    .about {
      display: flex;
      justify-content: space-between;
      margin-right: 50px;
      @media ${devices.mobile} {
        display:flex;
        flex-direction:column;
        justify-content:center;
      }

      .icons {
        margin-top: 3rem;
        color: white;
        border-radius: 5px;
        border-style: none;
        cursor: pointer;
        margin-right: 5rem;
        @media ${devices.mobile} {
        display:flex;
        justify-content:center;
      }
         
      }
      svg {
        width: 4rem;
        height: 4rem;
        fill: #38b2ac;
        margin-left: 6rem;
        cursor: pointer;

        :hover {
          fill: #a0aec0;
        }
      }
      .mail{
          height:10rem;
          width:4rem;
        }
    }
    
  }
`;

const FirstSection = () => {
  return (
    <TopStyled>
      <div className="left-section">
        <h4>Hello, I'm</h4>
        <h1>Adetola Akere</h1>
        <h3>
          A full-stack software engineer with great passion for problem solving
        </h3>
        <div className="about">
          <div className="button">
            <a href={resume} target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </div>
          <div className="icons">
          <a type="button" href="mailto:adetolaakere1@gmail.com" className="mail">
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
            </svg>
            </a>
            <a
              href="https://github.com/tolaked"
              target="__blank"
              rel="nofollow noopener noreferrer"
            >
              <svg viewBox="0 0 128 128">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                ></path>
                <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/tolaked"
              target="__blank"
              rel="nofollow noopener noreferrer"
            >
              <svg
                height="512pt"
                viewBox="0 0 512 512"
                width="512pt"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0" />
              </svg>
            </a>
            <a
              href="https://twitter.com/tolakedCFC"
              target="__blank"
              rel="nofollow noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </TopStyled>
  );
};

export default FirstSection;
