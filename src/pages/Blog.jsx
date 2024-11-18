import React from "react";
import NaveBar from "../components/NaveBar";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import AdBlock from "../components/AdBlock";
import PostCards from "../components/PostCards";
import styled from "styled-components";

const Wrapper = styled.div``;

const Background = styled.div`
  background-color: #212121;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

function Blog() {
  return (
    <Wrapper>
      <Background>
        <Container>
          <NaveBar />
          <BreadCrumb />
          <PostCards />
          <AdBlock />
        </Container>
      </Background>
      <Footer />
    </Wrapper>
  );
}

export default Blog;
