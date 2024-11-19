import styled from "styled-components";
import Card from "../../components/Card";
import { Carddata } from "../../utils/constants";
const ContainerWrapper = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-bottom: 5rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const Title = styled.h2`
  font-weight: 800;
  color: black;
  margin-bottom: 1rem;
`;

const GridWrapper = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  place-content: center;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const ViewAllButton = styled.button`
  border: 1px solid rgba(169, 169, 169, 0.5);
  font-size: 16px;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const Container = () => {
  return (
    <ContainerWrapper>
      <Title>Latest Posts</Title>
      <GridWrapper>
        {Carddata.map((card, index) => (
          <Card key={index} cardData={card} darkMode={false} />
        ))}
      </GridWrapper>
      <ButtonWrapper>
        <ViewAllButton>View All Posts</ViewAllButton>
      </ButtonWrapper>
    </ContainerWrapper>
  );
};

export default Container;
