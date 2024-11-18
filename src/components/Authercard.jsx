import React from "react";
import styled from "styled-components";
import {
  facebook,
  instagram,
  personLogo,
  twitter,
  youtube,
} from "../components/Images";
import SocailIcons from "../shared/SocailIcons";

const CardContainer = styled.div`
  background-color: #2c2c2c; /* dark-mat */
  margin: 2rem 0;
  padding: 2rem;
  text-align: center;
  display: grid;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const ProfileDetails = styled.div`
  display: grid;
  text-align: start;
  align-items: start;
`;

const ProfileName = styled.h5`
  margin: 0;
  color: #fff;
`;

const ProfileRole = styled.span`
  color: #6c757d; /* muted text */
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DescriptionText = styled.p`
  color: #6c757d; /* muted text */
  width: 50%;
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

function Authorcard() {
  return (
    <CardContainer>
      {/* Profile Section */}
      <ProfileWrapper>
        <img src={personLogo} alt="Author" />
        <ProfileDetails>
          <ProfileName>Jonathan Doe</ProfileName>
          <ProfileRole>Collaborator &amp; Editor</ProfileRole>
        </ProfileDetails>
      </ProfileWrapper>

      <DescriptionWrapper>
        <DescriptionText>
          Meet Jonathan Doe, a passionate writer and blogger with a love for
          technology and travel. Jonathan holds a degree in Computer Science and
          has spent years working in the tech industry, gaining a deep
          understanding of the impact technology has on our lives.
        </DescriptionText>
      </DescriptionWrapper>

      <SocialIconsWrapper>
        <SocailIcons
          src={facebook}
          href="www.facebook.com"
          alt="facebook.com"
        />
        <SocailIcons src={twitter} href="www.twitter.com" alt="twitter.com" />
        <SocailIcons
          src={instagram}
          href="www.instagram.com"
          alt="instagram.com"
        />
        <SocailIcons src={youtube} href="www.youtube.com" alt="youtube.com" />
      </SocialIconsWrapper>
    </CardContainer>
  );
}

export default Authorcard;
