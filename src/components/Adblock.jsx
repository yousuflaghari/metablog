import React from "react";
import styled from "styled-components";

const AdBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AdContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem;
  background-color: #2c2c2c;
  width: 75%;
  border-radius: 12px;
  margin: 2rem 0;
  color: #6c757d;
`;

const AdText = styled.p`
  margin: auto;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const AdHeading = styled.h3`
  margin: auto;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

const AdSubHeading = styled.h5`
  margin: auto;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
`;

const AdBlock = () => {
  return (
    <AdBlockWrapper>
      <AdContainer>
        <AdText>Advertisement</AdText>
        <AdHeading>You can place ads</AdHeading>
        <AdSubHeading>750x100</AdSubHeading>
      </AdContainer>
    </AdBlockWrapper>
  );
};

export default AdBlock;
