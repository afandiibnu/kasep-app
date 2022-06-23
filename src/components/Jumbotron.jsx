import React from "react";
import styled from "styled-components";
import bg from "./bg.png";

const Jumbotron = () => {
  return (
    <Wrapper>
      <Title className="title">The Best Foods Recipe Library</Title>
      <Subtitle>
        search all popular foods recipes in the world<br></br> and cook for your
        family
      </Subtitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 100px;
  text-align: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2.5rem;
`;

const Subtitle = styled.p`
  margin-top: 16px;
  color: #e3e3e3;
  font-size: 1.2em;
`;

export default Jumbotron;
