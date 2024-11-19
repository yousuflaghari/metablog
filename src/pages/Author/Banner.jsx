import styled from "styled-components";

// Styled components
const BannerContainer = styled.div`
  margin-top: 4rem;
  padding: 0 0.5rem;
  margin-bottom: 2.5rem;
`;

const BannerBox = styled.div`
  background-color: #f6f6f7;
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (prefers-color-scheme: dark) {
    background-color: black;
    border: 1px solid white;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 550px;
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NameText = styled.p`
  font-family: sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;

const RoleText = styled.p`
  font-family: sans-serif;
  font-size: 16px;
  color: ${({ theme }) => (theme === "dark" ? "white" : "#8a8a8a")};
`;

const DescriptionText = styled.p`
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => (theme === "dark" ? "white" : "#3b3c4a")};
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const SocialIcon = styled.img`
  width: 2rem;
`;

function Banner() {
  return (
    <BannerContainer>
      <BannerBox>
        <ContentWrapper>
          <NameContainer>
            <img src="images/Image (7).png" alt="" className="w-12" />
            <div>
              <NameText>Jonathan Doe</NameText>
              <RoleText>Collaborator & Editor</RoleText>
            </div>
          </NameContainer>
          <DescriptionText>
            Meet Jonathan Doe, a passionate writer and blogger with a love for
            technology and travel. Jonathan holds a degree in Computer Science
            and has spent years working in the tech industry, gaining a deep
            understanding of the impact technology has on our lives.
          </DescriptionText>
          <SocialIcons>
            <SocialIcon src="images/a-button.png" alt="" />
            <SocialIcon src="images/a-button (1).png" alt="" />
            <SocialIcon src="images/a-button (2).png" alt="" />
            <SocialIcon src="images/a-button (3).png" alt="" />
          </SocialIcons>
        </ContentWrapper>
      </BannerBox>
    </BannerContainer>
  );
}

export default Banner;
