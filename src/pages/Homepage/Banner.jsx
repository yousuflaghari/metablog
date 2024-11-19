import styled from "styled-components";

const BannerWrapper = styled.div`
  height: 250px;
  background-image: url("/images/banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 1216px;
  border-radius: 8px;
  background-position: right;

  @media (min-width: 640px) {
    height: 400px;
  }

  @media (min-width: 768px) {
    height: 700px;
    align-items: center;
    margin-left: 26px;
    background-position: center;
  }
`;

function Banner() {
  return <BannerWrapper />;
}

export default Banner;
