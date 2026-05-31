import styled, { css } from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  background: #111111;
  color: white;
  padding: 40px 60px;

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

export const SearchBar = styled.input`
  width: 100%;
  max-width: 500px;

  background: #1a1a1a;
  border: 1px solid #2c2c2c;
  border-radius: 20px;

  padding: 18px 24px;
  color: white;
  font-size: 1rem;

  outline: none;
  margin-bottom: 25px;

  transition: 0.3s;

  &:focus {
    border-color: #ff7a00;
  }
`;

export const FilterContainer = styled.div`
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

export const ArtistsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
`;

export const ArtistCard = styled.div`
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

export const ArtistImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ArtistOverlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.95),
    rgba(0, 0, 0, 0.2),
    transparent
  );
`;

export const ArtistInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  padding: 30px;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ArtistName = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 8px;
`;

export const ArtistRole = styled.p`
  color: #d1d5db;
  margin-bottom: 18px;
`;

export const ArtistTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Tag = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);

  padding: 8px 14px;
  border-radius: 999px;

  font-size: 0.8rem;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: stretch;
  }
`;
export const StatBox = styled.div`
  h4 {
    font-size: 1.3rem;
    margin-bottom: 4px;
  }

  span {
    color: #9ca3af;
    font-size: 0.85rem;
  }
`;

export const FollowButton = styled.button`
  background: #ff7a00;
  border: none;
  color: black;

  padding: 14px 20px;
  border-radius: 999px;

  font-weight: 700;
  cursor: pointer;

  transition: 0.3s;

  white-space: nowrap;

  &:hover {
    background: #ff9500;
    transform: scale(1.05);
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;