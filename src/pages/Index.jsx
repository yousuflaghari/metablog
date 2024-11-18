import React from "react";
import NaveBar from "../components/NaveBar";
import Footer from "../components/Footer";
import AdBlock from "../components/AdBlock";
import PostCards from "../components/PostCards";
import { autherCard1 } from "../components/Images";
import styled from "styled-components";

// Styled Components
const Wrapper = styled.div``;

const Background = styled.div`
  background-color: #212121;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Mask = styled.div`
  margin-bottom: 5rem;
`;

const CardGroup = styled.div`
  max-width: 40rem;
  position: relative;
  left: 5rem;
  top: 23rem;
  font-family: inherit;
`;

const StyledCard = styled.div`
  background-color: #1e1e1e;
  border: 1px solid #333;
  color: white;
  border-radius: 8px;
  overflow: hidden;
  font-family: inherit;
`;

const CardBody = styled.div`
  padding: 1.5rem;
  gap: 4px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding: 1rem;
  background-color: #333;
`;

const Badge = styled.h2`
  font-size: 1rem;
  background-color: #6c757d;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bolder;
`;

const AuthorInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const AuthorName = styled.span`
  font-size: 1rem;
`;

function Index() {
  return (
    <Wrapper>
      <NaveBar />
      <Background>
        <Container>
          <Mask>
            <CardGroup>
              <StyledCard>
                <CardBody>
                  <Badge>Technology</Badge>
                  <Heading>
                    The Impact of Technology on the Workplace: How Technology is
                    Changing
                  </Heading>
                </CardBody>
                <CardFooter>
                  <AuthorInfo>
                    <img src={autherCard1} alt="Auther" />
                    <AuthorName>Tracey Wilson</AuthorName>
                  </AuthorInfo>
                  <span>Date: August 20, 2024</span>
                </CardFooter>
              </StyledCard>
            </CardGroup>
          </Mask>
          <AdBlock />
          <PostCards />
          <AdBlock />
        </Container>
      </Background>
      <Footer />
    </Wrapper>
  );
}

export default Index;
