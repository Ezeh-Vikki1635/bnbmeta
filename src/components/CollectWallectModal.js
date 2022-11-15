import React from "react";
import styled from "styled-components";

import close from "../assets/images/close.svg";
import MK from "../assets/images/MK.svg";
import WC from "../assets/images/WC.svg";
import down from "../assets/images/Down.svg";

const Modal = ({ setIsModalOpen }) => {
  return (
    <ModalOuterContainer
      onClick={(e) => {
        e.stopPropagation();
        setIsModalOpen(false);
      }}
    >
      <Centered>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <ContentContainer>
            <Heading>
              <h2>Connect Wallet</h2>
              <img
                onClick={() => setIsModalOpen(false)}
                src={close}
                alt="Close Modal"
              />
            </Heading>
          </ContentContainer>
          <Line></Line>
          <ContentContainer>
            <p>Choose your preferred wallet:</p>
            <WalletContainer>
              <Wallet>
                <Logo>
                  <img src={MK} alt="Metamask logo" />
                  <p>Metamask</p>
                </Logo>
                <ArrowRight>
                  <img src={down} alt="Arrow Right" />
                </ArrowRight>
              </Wallet>
              <Wallet>
                <Logo>
                  <img src={WC} alt="WalletConnect" />
                  <p>WalletConnect</p>
                </Logo>
                <ArrowRight>
                  <img src={down} alt="Arrow Right" />
                </ArrowRight>
              </Wallet>
            </WalletContainer>
          </ContentContainer>
        </ModalContainer>
      </Centered>
    </ModalOuterContainer>
  );
};

export default Modal;

const ModalOuterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(64, 64, 64, 0.3);
  position: fixed;
  overflow: hidden;
`;

const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ContentContainer = styled.div`
  padding: 1rem 2rem;
  p {
    font-size: 1.6rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.9rem;
  }
`;

const WalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ModalContainer = styled.div`
  width: 60rem;
  background: #ffffff;
  border-radius: 1.6rem;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  img {
    cursor: pointer;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid #cfd8dc;
  margin-top: -1rem;
`;

const Wallet = styled.div`
  background: #f8f9fa;
  border: 1px solid #cfd8dc;
  border-radius: 1.2rem;
  display: flex;
  height: 5.5rem;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-left: 2rem;
  p {
    font-family: "Sora", sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    color: #000000;
    line-height: 2.3rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }
`;

const ArrowRight = styled.div`
  padding-right: 2rem;
`;
