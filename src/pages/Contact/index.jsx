import React from "react";
import styled from "styled-components";
import Image from "./Image";
import Form from "./Form";

// Styled Components
const ContactWrapper = styled.div`
  background-color: ${(props) =>
    props.darkMode ? "black" : "#87CEEB"}; /* Sky Blue */
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

function Contact() {
  return (
    <ContactWrapper darkMode={true}>
      <GridContainer>
        <Form />
        <Image />
      </GridContainer>
    </ContactWrapper>
  );
}

export default Contact;
