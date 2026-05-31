import styled, { css } from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  background: #111111;
  color: white;
  padding: 40px 60px;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 30px 20px;
  }
`;

export const HeroSection = styled.div`
  margin-bottom: 60px;
`;

export const HeroTitle = styled.h1`
  font-size: 7rem;
  line-height: 0.9;
  font-weight: 900;
  margin-bottom: 25px;

  @media (max-width: 900px) {
    font-size: 4rem;
  }
`;

export const HeroText = styled.p`
  color: #9ca3af;
  max-width: 700px;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 30px;
`;

export const SearchContainer = styled.div`
  margin-bottom: 25px;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;

  background: #1a1a1a;
  border: 1px solid #2c2c2c;
  border-radius: 20px;

  padding: 18px 24px;
  color: white;
  font-size: 1rem;

  outline: none;

  transition: 0.3s;

  &:focus {
    border-color: #ff7a00;
  }
`;

export const FilterRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button`
  padding: 12px 20px;
  border-radius: 999px;
  border: 1px solid #2f2f2f;

  background: transparent;
  color: white;

  cursor: pointer;
  transition: 0.3s;
  font-weight: 600;

  ${(props) =>
    props.active &&
    css`
      background: #ff7a00;
      color: black;
      border-color: #ff7a00;
    `}

  &:hover {
    border-color: #ff7a00;
  }
`;

export const CastingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 25px;
`;

export const CastingCard = styled.div`
  position: relative;
  height: 520px;

  border-radius: 35px;
  overflow: hidden;

  background: #1a1a1a;

  transition: 0.4s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const CastingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CastingOverlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.98),
    rgba(0, 0, 0, 0.3),
    transparent
  );
`;

export const CastingContent = styled.div`
  position: absolute;
  inset: 0;

  padding: 30px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
`;

export const CastingTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CastingCategory = styled.div`
  background: rgba(255, 255, 255, 0.08);

  border: 1px solid rgba(255, 255, 255, 0.15);

  padding: 10px 15px;
  border-radius: 999px;

  font-size: 0.75rem;
  font-weight: 700;
`;

export const CastingStatus = styled.div`
  background: #ff7a00;
  color: black;

  padding: 10px 15px;
  border-radius: 999px;

  font-size: 0.75rem;
  font-weight: 800;
`;

export const CastingTitle = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 12px;
`;

export const CastingDescription = styled.p`
  color: #d1d5db;
  line-height: 1.7;
`;

export const CastingInfo = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

export const InfoItem = styled.div`
  background: rgba(255, 255, 255, 0.08);

  padding: 10px 14px;
  border-radius: 999px;

  font-size: 0.85rem;
`;

export const CastingFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Deadline = styled.span`
  color: #9ca3af;
  font-size: 0.9rem;
`;

export const ApplyButton = styled.button`
  background: #ff7a00;
  border: none;
  color: black;

  padding: 14px 22px;
  border-radius: 999px;

  font-weight: 800;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: #ff9500;
    transform: scale(1.05);
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;