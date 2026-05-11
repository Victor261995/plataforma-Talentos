import styled, { css } from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: #111111;
  color: white;
  overflow: hidden;
`;

export const Hero = styled.section`
  padding: 4rem 5rem;
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 3rem 2rem;
  }
`;

export const Left = styled.div`
  flex: 1;
  z-index: 2;

  p:first-child {
    color: #9ca3af;
    max-width: 400px;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 7rem;
  line-height: 0.9;
  font-weight: 900;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    font-size: 4rem;
  }
`;

export const Description = styled.p`
  color: #d1d5db;
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 550px;
  margin-bottom: 2rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const buttonStyles = css`
  padding: 1rem 2rem;
  border-radius: 999px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  border: none;
`;

export const PrimaryButton = styled.button`
  ${buttonStyles}
  background: #ff7a00;
  color: black;

  &:hover {
    background: #ff9500;
  }
`;

export const SecondaryButton = styled.button`
  ${buttonStyles}
  background: transparent;
  border: 1px solid #555;
  color: white;

  &:hover {
    background: white;
    color: black;
  }
`;

export const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const BlurCircle = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background: #ff7a00;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.2;
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: 600px;
  object-fit: cover;
  border-radius: 30px;
  position: relative;
  z-index: 2;
`;

export const FloatingCard = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  background: #1a1a1a;
  padding: 1.5rem;
  border-radius: 20px;
  border: 1px solid #333;
  z-index: 3;

  p {
    color: #9ca3af;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 2rem;
  }
`;

export const JoinCircle = styled.div`
  position: absolute;
  bottom: 40px;
  right: -20px;
  width: 140px;
  height: 140px;
  background: #ff7a00;
  color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  z-index: 3;
`;

export const Features = styled.section`
  padding: 2rem 5rem 6rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

export const FeatureCard = styled.div`
  background: #181818;
  border: 1px solid #2b2b2b;
  border-radius: 30px;
  padding: 2rem;
  transition: 0.3s;

  ${(props) =>
    props.rotate &&
    css`
      transform: rotate(-3deg);
    `}

  &:hover {
    border-color: #ff7a00;
    transform: rotate(0deg) translateY(-5px);
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #9ca3af;
    line-height: 1.7;
  }
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  background: #ff7a00;
  border-radius: 50%;
  margin-bottom: 1.5rem;
`;

export const AboutSection = styled.section`
  padding: 2rem 5rem 6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

export const AboutText = styled.div`
  h2 {
    font-size: 5rem;
    line-height: 0.95;
    margin-bottom: 2rem;
  }

  p {
    color: #9ca3af;
    line-height: 1.8;
    font-size: 1.1rem;
    max-width: 500px;
  }
`;

export const AboutImages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  .down {
    margin-top: 3rem;
  }

  .up {
    margin-top: -3rem;
  }
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 30px;
`;