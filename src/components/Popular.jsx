import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=92568ef0203a49f3aa2e19bb08f6ab5b&number=12`
      );
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <Wrapper>
      <h3>Popular Recipes</h3>
      <Splide
        options={{
          perPage: 5,
          breakpoints: {
            640: {
              perPage: 1,
            },
            768: {
              perPage: 3,
            },
          },
          gap: "16px",
          arrows: true,
          pagination: false,
          rewind: true,
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <img src={recipe.image} alt={recipe.title} />
                <p>{recipe.title}</p>
                <Label>{recipe.dishTypes[0]}</Label>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2em 5em;
  margin-top: 40px;
  h2 {
    color: #212121;
  }
`;

const Card = styled.div`
  margin-top: 32px;
  position: relative;
  color: #000000;

  img {
    overflow: hidden;
    border-radius: 8px;
    object-fit: cover;
    width: 100%;
    height: 18vh;
  }

  p {
    margin-top: 8px;
    font-size: 0.8em;
    font-weight: 500;
  }
`;

const Label = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 8px;
  top: 8px;
  padding: 8px 16px;
  background-color: rgb(44, 182, 125, 0.8);
  color: #fff;
  border-radius: 18px;
  font-weight: bolder;
  font-size: 0.7em;
`;

export default Popular;
