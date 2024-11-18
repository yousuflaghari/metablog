import React from "react";
import NaveBar from "../components/NaveBar";
import Authorcard from "../components/Authorcard";
import PostCards from "../components/PostCards";
import Footer from "../components/Footer";
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

function Author() {
  return (
    <Wrapper>
      <Background>
        <Container>
          <NaveBar />
          <Authorcard />
          <PostCards />
        </Container>
      </Background>
      <Footer />
    </Wrapper>
  );
}

export default Author;
