import Card from "../../components/Card";
import styled from "styled-components";
import { Carddata } from "../../utils/constants";

// Styled components
const ContainerWrapper = styled.div`
  padding: 0 1.5rem;
  margin-bottom: 5rem;
`;

const Title = styled.h2`
  font-weight: 800;
  color: black;
  margin-bottom: 1rem;
`;

const CardsGrid = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-items: center;
  align-items: center;
`;

function Container() {
  return (
    <ContainerWrapper>
      <Title>Latest Post</Title>
      <CardsGrid>
        {Carddata.map((card, index) => (
          <Card key={index} cardData={card} />
        ))}
      </CardsGrid>
    </ContainerWrapper>
  );
}

export default Container;
