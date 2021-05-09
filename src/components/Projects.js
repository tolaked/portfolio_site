import React from "react";
import styled from "styled-components";
import hydrogenHr from "../img/hydrogenHR.png";
import devices from "../utils/devices";
import Computer from "../img/Computer.png"

const ProjectStyled = styled.div`
  height: 100vh;
  padding-top: 15rem;

  @media ${devices.large} {
    height: auto;
  }
  @media ${devices.mobile} {
    padding-top: 5rem;
  }
  h1 {
    margin-bottom: 15vh;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${devices.tablet} {
      font-size: 2.4rem;
    }

    @media ${devices.mobile} {
      margin-bottom: 5vh;
      font-size: 1.8rem;
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
  .projectContainer {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7rem;

    @media ${devices.large} {
      position: static;
      flex-direction: column-reverse;
      position: static;
      justify-content: none;
      /* display: none; */
    }

    @media ${devices.tablet} {
      flex-direction: column-reverse;
      position: static;
      justify-content: none;
    }

    .imgDiv {
      position: absolute;
      width: 50%;
      margin-left: 50%;

      img {
        max-width: 100%;
        border-radius: 0.5rem;
        box-shadow: -2px 0px 2px 1px #ffffff;
        height: auto;
      }

      @media ${devices.large} {
        position: static;
        width: 80%;
        margin-left: 0%;
        margin-bottom: 2rem;
      }

      @media ${devices.tablet} {
        position: static;
        width: 90%;
        margin-left: 0%;
        margin-bottom: 2rem;
      }
    }

    .textDiv {
      background: #2d3748;
      padding: 4rem;
      border-radius: 0.5rem;
      text-align: left;
      width: 60%;
      box-shadow: -2px 0px 1px 1px #2d3748;
      height: 40rem;

      @media ${devices.large} {
        width: 80%;
        height: auto;
        padding: 1rem;
      }

      @media ${devices.tablet} {
        width: 90%;
        height: auto;
        padding: 1rem;
      }

      a {
        text-decoration: none;
      }
      h4 {
        background: #2d3748;
        color: #38b2ac;
        margin-bottom: 1rem;
      }
      h3 {
        color: white;
        background: #2d3748;
      }

      .techDiv {
        display: flex;
        flex-wrap: wrap;
        background: #2d3748;
        margin-bottom: 2rem;
        width: 70%;

        @media ${devices.large} {
          width: 90%;
        }

        @media ${devices.tablet} {
          width: 100%;
        }

        h4 {
          margin-right: 2.5rem;
          color: white;
        }
      }

      .techDiv2 {
        margin-top: 11rem;
        margin-bottom: 2rem;

        @media ${devices.tablet} {
          margin-top: 2rem;
        }
      }

      .techDiv3 {
        margin-top: 8rem;
        margin-bottom: 2rem;

        @media ${devices.tablet} {
          margin-top: 2rem;
        }
      }

      .descriptionDiv {
        margin-top: 4rem;
        width: 85%;
        margin-bottom: 4rem;

        @media ${devices.tablet} {
          width: 100%;
          margin-bottom: 2rem;
        }
        p {
          background: #2d3748;
          color: #a0aec0;
        }
      }
      a {
        background: #2d3748;
      }
      svg {
        width: 3rem;
        height: 3rem;
        fill: #38b2ac;
        margin-right: 2rem;
        background: #2d3748;
        cursor: pointer;

        :hover {
          fill: #a0aec0;
        }
      }
    }
  }
`;

const Projects = () => {
  return (
    <ProjectStyled id="projects">
      <h1>
        <div className="lineStyle"></div>
        Projects I've Built
        <div className="lineStyle"></div>
      </h1>

      {/* First project */}
      <div className="projectContainer">
        <div className="textDiv">
          <a
            href="https://pictures-eta.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>CrossCheck</h3>
          </a>
          <div className="descriptionDiv">
            <p>
             Crosscheck is an online transcript request and verification service for academic qualifications and professional body memberships, providing innovative solutions and services to clients for better hiring or engagement decision making.
            </p>
          </div>
          <div className="techDiv">
            <h4>React</h4>
            <h4>Redux</h4>
            <h4>NodeJS</h4>
            <h4>MongoDb</h4>
            <h4>ExpressJS</h4>
            <h4>Styled Components</h4>
          </div>
          <a
            href="https://crosscheck.africa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              id="Capa_1"
              enable-background="new 0 0 515.556 515.556"
              height="512"
              viewBox="0 0 515.556 515.556"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m392.189 0c-32.946 0-63.926 12.839-87.227 36.14l-96.067 96.067c7.342-1.025 14.677-2.138 22.182-2.138 20.693 0 40.97 4.02 59.611 11.474l59.839-59.839c11.139-11.124 25.929-17.26 41.662-17.26 32.49 0 58.922 26.432 58.922 58.922 0 15.734-6.136 30.523-17.26 41.662l-107.71 107.712c-22.279 22.247-61.046 22.263-83.325.016l-45.533 45.596c23.286 23.27 54.265 36.093 87.195 36.093 32.946 0 63.925-12.839 87.227-36.14l107.712-107.712c23.301-23.301 36.14-54.281 36.14-87.227-.001-68.031-55.336-123.366-123.368-123.366z" />
              <path d="m224.303 374.578-59.274 59.274c-11.139 11.124-25.929 17.26-41.662 17.26-32.49 0-58.922-26.432-58.922-58.922 0-15.733 6.136-30.523 17.26-41.662l107.712-107.712c22.279-22.247 61.046-22.263 83.325-.016l45.533-45.596c-46.587-46.54-127.819-46.555-174.422.047l-107.713 107.712c-23.302 23.301-36.14 54.28-36.14 87.226 0 68.032 55.335 123.366 123.366 123.366 32.946 0 63.925-12.839 87.227-36.14l94.792-94.792c-6.921.93-13.806 2.043-20.908 2.043-21.012.001-41.363-4.2-60.174-12.088z" />
            </svg>
          </a>
       
        </div>
        <div className="imgDiv" >
          <img alt="crosscheck" style={{background:'white'}} src={Computer} />
        </div>
      </div>
      {/* second project */}
      <div className="projectContainer">
        <div className="textDiv">
          <a
            href="https://pictures-eta.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>HydrogenHR</h3>
          </a>
          <div className="descriptionDiv">
            <p>
              An employee management platform
            </p>
          </div>
          <div className="techDiv">
            <h4>React</h4>
            <h4>Redux</h4>
            <h4>Java</h4>
            <h4>Express</h4>
            <h4>mongoDb</h4>
            <h4>Styled Components</h4>
          </div>
          <a
            href="https://pictures-eta.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              id="Capa_1"
              enable-background="new 0 0 515.556 515.556"
              height="512"
              viewBox="0 0 515.556 515.556"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m392.189 0c-32.946 0-63.926 12.839-87.227 36.14l-96.067 96.067c7.342-1.025 14.677-2.138 22.182-2.138 20.693 0 40.97 4.02 59.611 11.474l59.839-59.839c11.139-11.124 25.929-17.26 41.662-17.26 32.49 0 58.922 26.432 58.922 58.922 0 15.734-6.136 30.523-17.26 41.662l-107.71 107.712c-22.279 22.247-61.046 22.263-83.325.016l-45.533 45.596c23.286 23.27 54.265 36.093 87.195 36.093 32.946 0 63.925-12.839 87.227-36.14l107.712-107.712c23.301-23.301 36.14-54.281 36.14-87.227-.001-68.031-55.336-123.366-123.368-123.366z" />
              <path d="m224.303 374.578-59.274 59.274c-11.139 11.124-25.929 17.26-41.662 17.26-32.49 0-58.922-26.432-58.922-58.922 0-15.733 6.136-30.523 17.26-41.662l107.712-107.712c22.279-22.247 61.046-22.263 83.325-.016l45.533-45.596c-46.587-46.54-127.819-46.555-174.422.047l-107.713 107.712c-23.302 23.301-36.14 54.28-36.14 87.226 0 68.032 55.335 123.366 123.366 123.366 32.946 0 63.925-12.839 87.227-36.14l94.792-94.792c-6.921.93-13.806 2.043-20.908 2.043-21.012.001-41.363-4.2-60.174-12.088z" />
            </svg>
          </a>
        
        </div>
        <div className="imgDiv" >
          <img alt="hydrogenHr" src={hydrogenHr} />
        </div>
      </div>

      
     

      

      

     
    </ProjectStyled>
  );
};

export default Projects;
