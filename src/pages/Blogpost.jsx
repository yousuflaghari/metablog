import React from "react";
import NaveBar from "../components/NaveBar";
import Footer from "../components/Footer";
import Post from "../components/Post";
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

function BlogPost() {
  return (
    <Wrapper>
      <Background>
        <Container>
          <NaveBar />
          <Post />
        </Container>
      </Background>
      <Footer />
    </Wrapper>
  );
}

export default BlogPost;
