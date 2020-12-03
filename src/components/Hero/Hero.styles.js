import styled from "styled-components";
import { primary, secondary } from "../../data/colors";

export const HeroContainer = styled.div`
  height: 90vh;
  background: ${primary};
`;
export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: -80px;
`;
export const HeroContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 48px;
  overflow: hidden;
  letter-spacing: 0.15em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 24px;
  }
`;
export const HeroH1 = styled.h1`
  color: ${secondary};
  max-width: 550px;
  text-align: center;
  margin: 0 auto;
  overflow: hidden;
  line-height: 2.5rem;
`;

export const HeroH2 = styled.h2`
  color: ${primary};
  max-width: 550px;
  text-align: center;
  margin: 0 auto;
  background: ${secondary};
  padding: 12px 1rem;
  border-radius: 8px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    padding: 8px 1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
