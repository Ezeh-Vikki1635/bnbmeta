import React from "react";
import styled from "styled-components";

import hero_img from "../assets/images/heroImage.svg";

const Hero = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <h2>
          Rent a <span>Place</span> away from <span>Home</span> in the{" "}
          <span>Metaverse</span>
        </h2>
        <p>
          We provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>

        <SearchInput>
          <form>
            <input placeholder="Search for location" />
            <button type="submit">Search</button>
          </form>
        </SearchInput>
      </TextContainer>
      <ImageContainer>
        <img src={hero_img} alt="Hero" />
      </ImageContainer>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  max-width: 110rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15rem auto;
  
`;

const TextContainer = styled.div`
  font-size: 3.6rem;
  font-weight: 400;
  line-height: 7.84rem;
  max-width: 64.6rem;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  h2 {
    margin: 0;
    color: #434343;

    span {
      font-weight: 700;
      /* color: linear-gradient(90deg, #a02279 100%, #ffc089 60%); */
      color: #a02279;
    }
  }

  p {
    margin: 0;
    font-size: 2.4rem;
    font-weight: 400;
    font-style: normal;
    line-height: 3.5rem;
    color: #434343;
  }
`;

const ImageContainer = styled.div`
  max-width: 47.6rem;

  img {
    width: 100%;
  }
`;

const SearchInput = styled.div`
  max-width: 61.8rem;

  form {
    width: 100%;
    display: flex;
    align-items: center;

    input {
      width: 39rem;
      padding: 1.5rem;
      background: rgba(247, 247, 247, 0.1);
      border: 1px solid #a3a3a3;
      border-radius: 8px 0px 0px 8px;

      ::placeholder {
        color: #b8b8b8;
      }
    }

    button {
      border: none;
      background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.46%);
      color: #fff;
      padding: 1.5rem 8rem;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
      border-radius: 0px 8px 8px 0px;
      cursor: pointer;
    }
  }
`;
