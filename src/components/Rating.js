import React from "react";
import styled from "styled-components";

import rating from "../assets/images/rating.svg";

const Rating = ({ nftData }) => {
  return (
    <CardContainer>
      <img src={nftData.image} alt="" />
      <TextContainer>
        <LeftText>
          <p>{nftData.name}</p>
          <p>{nftData.distance}</p>
          <img src={rating} alt="rating" />
        </LeftText>
        <RightText>
          <p>{nftData.price}</p>
          <p>{nftData.availability}</p>
        </RightText>
      </TextContainer>
    </CardContainer>
  );
};

export default Rating;

const CardContainer = styled.div`
  width: 29.2rem;
  display: flex;
  flex-direction: column;
  background: linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%);
  border: 1px solid #d7d7d7;
  border-radius: 15px;
  cursor: pointer;

  img {
    width: 100%;
    padding: 1rem;
  }

  @media (max-width: 72em) {
    /* flex-wrap: nowrap; */
    width: 24rem;
  }

  @media (max-width: 46.6em) {
    width: 32rem;
  }

  @media (max-width: 30em) {
    width: 40rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 1rem;
`;

const LeftText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;

  img {
    padding: 0;
  }

  p {
    font-size: 1.2rem;
    margin: 0;
  }

  @media (max-width: 46.6em) {
    width: 40%;
  }

  @media (max-width: 30em) {
    p {
      font-size: 1.8rem;
    }
  }
`;

const RightText = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-self: flex-start;

  p {
    font-size: 1.2rem;
    margin: 0;
  }

  p:first-child {
    font-weight: 700;
  }

  @media (max-width: 30em) {
    p {
      font-size: 1.8rem;
    }
  }
`;
