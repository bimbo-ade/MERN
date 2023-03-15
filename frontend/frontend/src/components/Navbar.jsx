import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <div>
      <Div>
        <div className="img-cont">HOME</div>
        <div className={"links"}>
          <ul>
            <li>Home</li>
            <li>Menu</li>

            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <div className="cart-icon-btn">
            <button> Login </button>
          </div>
        </div>
      </Div>
    </div>
  );
};

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
  padding: 2rem 3rem 0.5rem;
  // position: relative;
  background-color: gray;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 14;
  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 500px;
  }
  .active {
  }
  ul {
    display: flex;
  }
  ul li {
    cursor: pointer;
    list-style: none;
    padding: 0 0.6rem;
    font-weight: 500;
    font-size: 0.9rem;
    color: white;
    text-decoration: 0;
  }
  ul li a {
    transition: 0.17s ease;
    &: hover {
      color: #ff2b51;
    }
  }
  button {
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
    border: 0;
    background-color: #ff2156;
    color: white;
    font-weight: 500;
    font-size: 0.9rem;
  }
  .cart-icon-btn {
    position: relative;

    svg {
      padding-right: 1.2rem;
      font-size: 1.3rem;
      position: relative;
    }
    span {
      position: absolute;
      top: -0.4rem;
      right: 6rem;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      background: red;
      color: white;
      font-size: 0.7rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .menu-icon {
    display: none;
  }
`;
export default Navbar;
