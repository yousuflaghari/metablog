import React from "react";
import styled from "styled-components";

// Styled Component
const ImageWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const StyledImage = styled.img`
  width: 700px;
`;

function Image() {
  return (
    <ImageWrapper>
      <StyledImage src="/images/Contact us.png" alt="" />
    </ImageWrapper>
  );
}

export default Image;
