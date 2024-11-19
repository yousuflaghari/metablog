import styled from "styled-components";

const BannerWrapper = styled.div`
  height: 250px;
  background: url("/images/banner.png") no-repeat center right;
  background-size: cover;
  width: 100%;
  border-radius: 1rem;

  @media (min-width: 640px) {
    height: 400px;
  }

  @media (min-width: 768px) {
    height: 600px;
    background-position: center;
  }
`;

const Banner = ({ children }) => {
  return <BannerWrapper>{children}</BannerWrapper>;
};

export default Banner;
