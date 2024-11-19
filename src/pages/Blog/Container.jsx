import styled from "styled-components";
import Card from "../../components/Card";

// Styled components
const ContainerWrapper = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-bottom: 5rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr;
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

const LoadMoreWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadMoreButton = styled.button`
  border: 1px solid #d1d5db; /* Tailwind's gray-light */
  opacity: 0.5;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem; /* Tailwind's rounded-md */

  &:hover {
    opacity: 1;
  }
`;

function Container() {
  return (
    <ContainerWrapper>
      <GridWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </GridWrapper>
      <LoadMoreWrapper>
        <LoadMoreButton>Load More</LoadMoreButton>
      </LoadMoreWrapper>
    </ContainerWrapper>
  );
}

export default Container;
