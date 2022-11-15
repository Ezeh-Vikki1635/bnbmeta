import React from "react";
import styled from "styled-components";

import mbToken from "../assets/images/MBToken.svg";
import metamask from "../assets/images/metamask.svg";
import opensea from "../assets/images/opensea.svg";

const CartSection = () => {
  return (
    <CartContainer>
      <img src={mbToken} alt="MB token logo" />
      <img src={metamask} alt="metamask logo" />
      <img src={opensea} alt="opensea logo" />
    </CartContainer>
  );
};

export default CartSection;

const CartContainer = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 5rem;
  gap: 20.4rem;

  img {
    width: 15rem;
  }
`;
