import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <h3>KASEP</h3>
      <p>y.x.g.msk</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #16161a;

  h3 {
    color: #2cb67d;
  }

  p {
    font-size: 0.8em;
    color: #ffffff;
    margin-top: -8px;
  }
`;

export default Navbar;
