import { CiMail } from "react-icons/ci";
import styled from "styled-components";
import { useToggleTheme } from "../contexts/ToggleThemeContext";

const FooterWrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    padding-left: 0;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FooterColumn = styled.div``;

const Title = styled.h4`
  color: ${(props) => props.theme.text};
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const Text = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  opacity: 0.5;
  line-height: 1.5;
  margin-bottom: 1.25rem;
`;

const InfoText = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  font-weight: 600;
`;

const InfoSpan = styled.span`
  font-weight: 400;
  opacity: 0.9;
`;

const LinksColumn = styled.div`
  list-style-type: none;
`;

const LinkItem = styled.li`
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  font-weight: normal;
  opacity: 0.9;
  margin-bottom: 0.5rem;
`;

const NewsletterWrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  border: ${(props) => props.theme.background};
  border-radius: 0.75rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 320px;
  text-align: center;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 307px;
  border-radius: 6px;
  margin-bottom: 1rem;
  padding-right: 10px;
  border: 1px solid #9e9c9c;
`;

const EmailInput = styled.input`
  padding-right: 2.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 72%;
  font-size: 1rem;
  border: 1px solid
    ${({ isDarkMode }) => (isDarkMode ? "transparent" : "transparent")};
  border-radius: 0.375rem;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  width: 100%;
  font-size: 1rem;
  border-radius: 0.375rem;
  color: white;
  background-color: blue;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2.5rem;
`;

const LogoImage = styled.img`
  width: 2.5rem;
`;

const MetaText = styled.h2`
  color: ${(props) => props.theme.text};
  font-size: 1.25rem;
  font-family: sans-serif;
`;

const MetaSubtitle = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  opacity: 0.5;
`;

const FooterLinks = styled.ul`
  display: flex;
  gap: 2.5rem;
  align-items: center;
`;

const FooterLinkItem = styled.li`
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  font-weight: normal;
  opacity: 0.9;
`;

const Hr = styled.hr`
  margin-top: 1.5rem;
  border: 0;
  border-top: ${(props) => props.theme.background};
`;
const PagesLink = styled.ul`
  list-style-type: none;
  padding: 0px;
`;
const Otherlink = styled.ul`
  list-style-type: none;
  padding: 0px;
`;
const Linkcontainer = styled.div`
  display: flex;
  gap: 80px;
`;
const Privacycontainer = styled.div`
  padding-left: 20px;
`;
function Footer() {
  const { darkMode } = useToggleTheme();

  return (
    <FooterWrapper>
      <GridContainer>
        <FooterColumn>
          <Title>About</Title>
          <Text>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
            do <br /> eiusmod tempor incididunt ut labore <br /> et dolore magna
            aliqua. Ut enim ad <br /> minim veniam
          </Text>
          <InfoText>
            Email: <InfoSpan>info@jstemplate.net</InfoSpan>
          </InfoText>
          <InfoText>
            Phone: <InfoSpan>880 123 456 789</InfoSpan>
          </InfoText>
        </FooterColumn>

        <Linkcontainer>
          <LinksColumn>
            <Title>Quick Links</Title>
            <PagesLink>
              <LinkItem>Home</LinkItem>
              <LinkItem>About</LinkItem>
              <LinkItem>Blog</LinkItem>
              <LinkItem>Archived</LinkItem>
              <LinkItem>Author</LinkItem>
              <LinkItem>Contact</LinkItem>
            </PagesLink>
          </LinksColumn>

          <LinksColumn>
            <Title>Category</Title>
            <Otherlink>
              <LinkItem>Lifestyle</LinkItem>
              <LinkItem>Technology</LinkItem>
              <LinkItem>Travel</LinkItem>
              <LinkItem>Business</LinkItem>
              <LinkItem>Economy</LinkItem>
              <LinkItem>Sports</LinkItem>
            </Otherlink>
          </LinksColumn>
        </Linkcontainer>

        <NewsletterWrapper>
          <h3>Weekly Newsletter</h3>
          <Text>Get blog articles and offers via email</Text>
          <InputWrapper>
            <EmailInput type="email" placeholder="Your email" />
            <CiMail className="w-5 h-5 text-gray-500" />
          </InputWrapper>
          <SubmitButton>Subscribe</SubmitButton>
        </NewsletterWrapper>
      </GridContainer>

      <Hr />

      <Privacycontainer>
        <LogoWrapper>
          <LogoImage src={`/images/Logo.png`} alt="Logo" />
          <div>
            <MetaText>
              Meta<span className="font-bold">Blog</span>
            </MetaText>
            <MetaSubtitle>
              © JS Template 2023. All Rights Reserved.
            </MetaSubtitle>
          </div>
        </LogoWrapper>

        <FooterLinks>
          <FooterLinkItem>Terms of Use</FooterLinkItem>
          <FooterLinkItem>Privacy Policy</FooterLinkItem>
          <FooterLinkItem>Cookie Policy</FooterLinkItem>
        </FooterLinks>
      </Privacycontainer>
    </FooterWrapper>
  );
}

export default Footer;
