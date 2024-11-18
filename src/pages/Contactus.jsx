import React from "react";
import NaveBar from "../components/NaveBar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
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

const Content = styled.div`
  margin-top: 30px;
`;

function ContactUs() {
  return (
    <Wrapper>
      <Background>
        <Container>
          <NaveBar />
        </Container>
        <Content>
          <ContactForm />
        </Content>
      </Background>
      <Footer />
    </Wrapper>
  );
}

export default ContactUs;
