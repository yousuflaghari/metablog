import styled from "styled-components";
import Banner from "./Banner";
import Container from "./Container";

// Styled Components
const HomepageWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 4rem;

  @media (min-width: 640px) {
    margin-top: 4rem;
  }
`;

const BannerWrapper = styled.div`
  position: relative;
  margin-bottom: 4rem;
`;

const BannerContent = styled.div`
  background-color: ${(props) => props.theme.background};
  border-radius: 1rem;
  padding: 0.5rem;
  position: absolute;
  bottom: -2.5rem;
  left: 0.5rem;
  width: 80%;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: 0.2s;

  @media (min-width: 640px) {
    width: 20rem;
    left: 5rem;
    padding: 1.5rem;
  }
`;

const CategoryButton = styled.button`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 12px;
  margin-bottom: 0.75rem;
`;

const BannerTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 28px;
  }
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Author = styled.span`
  margin-right: 1rem;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);

  @media (min-width: 640px) {
    font-size: 16px;
  }
`;

const Date = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);

  @media (min-width: 640px) {
    font-size: 16px;
  }
`;

const Image = styled.img`
  width: 2rem;
  margin-right: 1rem;
  display: inline-block;
`;

function Homepage() {
  return (
    <HomepageWrapper>
      <BannerWrapper>
        <Banner />
        <BannerContent>
          <CategoryButton>Technology</CategoryButton>
          <BannerTitle>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </BannerTitle>
          <MetaInfo>
            <Image src="/images/Image (7).png" alt="Author" />
            <Author>Jason Francisco</Author>
            <Date>October 22, 2024</Date>
          </MetaInfo>
        </BannerContent>
      </BannerWrapper>
      <Container />
    </HomepageWrapper>
  );
}

export default Homepage;
