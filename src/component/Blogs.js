import React from "react";
import styled from "styled-components";
import devices from "../utils/devices";

const Blogs = () => {
  const ProjectStyled = styled.div`
    margin-top: 10rem;

    h1 {
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
    .blogsContainer {
      width: 90%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      @media ${devices.mobile} {
        display: flex;
      flex-direction: column;
      margin-left:6rem;
      
      }
      

      .textDiv {
        background: #2d3748;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;
        border: 1px solid;
        border-radius: 0.5rem;
        width: 48%;
        box-shadow: -2px 0px 1px 1px #2d3748;
        height: 38rem;
        @media ${devices.mobile} {
          margin-bottom: 5rem;
          width: 98%;
          height: 43rem;
      }

        h4 {
          background: #2d3748;
          color: #ffffff;
          font-size: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.25;
          font-weight: 700;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }
        p {
          padding-left: 2rem;
          padding-right: 2rem;
        }
        h3 {
          color: white;
          background: #2d3748;
        }
        button {
          width: 15rem;
          color: white;
          padding: 1rem;
          border-radius: 5px;
          border-style: none;
          cursor: pointer;
          background: #38b2ac;
          a {
            background: none;
            text-decoration:none;
            color:#ffffff
          }
        }
        .descriptionDiv {
          margin-top: 4rem;
          width: 100%;
          margin-bottom: 4rem;
          p {
            background: #2d3748;
            color: #a0aec0;
          }
        }
      }
    }
  `;
  return (
    <ProjectStyled id="blogs">
      <h1>
        <div className="lineStyle"></div>
        Blog Posts
        <div className="lineStyle"></div>
      </h1>
      <div className="blogsContainer">
        <div className="textDiv">
          <h4>
            Adaptation and how it has helped me overcome Bootcamp challenges
          </h4>
          <div className="descriptionDiv">
            <p>
              Adaptation is the ability of an individual or an entity to alter
              itself or its responses to the changed circumstances or
              environment. Adaptability shows the ability to learn from
              experience and improves the fitness of the learner as a
              competitor.
            </p>
          </div>
          <button>
            <a
              href="https://medium.com/@adetolaakere1/adaptation-and-how-it-has-helped-me-overcome-bootcamp-challenges-cb12c6740ab1"
              target="__blank"
              rel="nofollow noopener noreferrer"
            >
              Read More
            </a>
          </button>
        </div>
        <div className="textDiv">
          <h4>The values in having a growth mindset</h4>
          <div className="descriptionDiv">
            <p>
              A Growth mindset is a belief that intelligence can be developed.
              This entails believing that ability, intelligence, and general
              performance can be improved. Individuals with a growth mindset
              have a higher tendency to develop intelligence and abilities over
              time.
            </p>
          </div>
          <button>
            <a
              href="https://medium.com/@adetolaakere1/the-values-in-having-a-growth-mindset-8f0849c41ca5"
              target="__blank"
              rel="nofollow noopener noreferrer"
            >
              Read More
            </a>
          </button>
        </div>
        <div className="textDiv">
          <h4>My Reflections on Andela’s EPIC values</h4>
          <div className="descriptionDiv">
            <p>
              Andela is a talent outsourcing tech company that has taken up the
              challenge of redeeming the unharnessed talents among the youths.
              Over the few years of its existence, Andela has proven to be the
              best software development technical talent accelerator company in
              Africa and one of the best in the world.
            </p>
          </div>
          <button>
            <a
              href="https://medium.com/@adetolaakere1/my-reflections-on-andelas-epic-values-45f78354c24f"
              target="__blank"
              rel="nofollow noopener noreferrer"
            >
              Read More
            </a>
          </button>
        </div>
        <div className="textDiv">
          <h4>An important tool I encountered in preparation for Bootcamp</h4>
          <div className="descriptionDiv">
            <p>
              Andela Bootcamp is the final and most important stage of
              prospective Andelans’ journey to becoming a world-class Developer.
              It is an opportunity to be part of a select group of technologists
              committed to transforming the technology landscape in Africa and
              around the world.
            </p>
          </div>
          <button>
            <a
              href="https://medium.com/@adetolaakere1/an-important-tool-i-encountered-in-preparation-for-bootcamp-17cdea613d20"
              target="__blank"
              rel="nofollow noopener noreferrer"
            >
              Read More
            </a>
          </button>
        </div>
      </div>
    </ProjectStyled>
  );
};

export default Blogs;
