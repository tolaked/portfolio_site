import React,{useState} from "react";
import styled from "styled-components";
import devices from "../utils/devices";
import '../App.css'

const NavStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #0b0a1d;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  height: 65px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  overflow: hidden;
  margin-left:-130px;
  @media ${devices.mobile} {
        width: 600px;
        display: flex;

      }


  .linkDiv {
    display: flex;
    margin-right:-200px;
    @media ${devices.mobile} {
    display: none;
    
    width: 100%;
  }

    .navLink {
      margin-left: 5rem;
    }
  }

  .linkStyle {
    color: white;
    text-decoration: none;
    margin-right:30px;
  }
  .log{
      background:#38B2AC;
      color: white;
    text-decoration: none;
    cursor:pointer;
  }
  .logo{
      background:#38B2AC;
      border-radius:50px;
      width:50px;
      height:50px;
      justify-content:center;
      align-items:center;
      display:flex;
      /* @media ${devices.mobile} {
        float: left;
      
      } */

  }
`;

const Header = () => {
  const [show, setShow] = useState(false)
  const setToggle =()=>{
    setShow(!show)
  }
  return (
    <NavStyled>
      <div className="logo">
        <a href="#" className="log" >
          AA
        </a>
      </div>

      {/* Hamburger menu
      <Icon type="menu" onClick={setToggle} className={show ? 'show' : null} />
     
        {show &&
        (
          <div>
        <div>
          <a href="#about"
          rel="nofollow noopener noreferrer" className="linkStyle">
            About
          </a>
        </div>
        <div className="navLink">
          <a href="#projects" className="linkStyle" >
            Projects
          </a>
        </div>
        <div className="navLink">
          <a href="#contact" className="linkStyle">
            Contact
          </a>
        </div>
        <div className="navLink">
        <a href="#blogs" className="linkStyle">
            Blogs
          </a>
        </div>
        </div>
        )
      } */}

      {/* Hamburger Menu */}

      <div className="linkDiv">
        <div>
          <a href="#about"
          rel="nofollow noopener noreferrer" className="linkStyle">
            About
          </a>
        </div>
        <div className="navLink">
          <a href="#projects" className="linkStyle" >
            Projects
          </a>
        </div>
        <div className="navLink">
          <a href="#contact" className="linkStyle">
            Contact
          </a>
        </div>
        <div className="navLink">
        <a href="#blogs" className="linkStyle">
            Blogs
          </a>
        </div>
      </div>
    </NavStyled>
  );
};

export default Header;
