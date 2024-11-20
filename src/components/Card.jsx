import styled from "styled-components";

const CardContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 300px;
  border: ${(props) => props.theme.border};

  @media (min-width: 640px) {
    border: ${(props) => props.theme.border};
    width: 95%;
  }
`;

const CardImage = styled.img`
  margin-bottom: 0.75rem;
  width: 100%;
  border-radius: 0.25rem;
`;

const CategoryButton = styled.button`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  margin-bottom: 0.75rem;
  border: none;
  cursor: pointer;
`;

const Title = styled.h1.attrs(({ darkMode }) => ({
  darkMode,
}))`
  font-size: 20px;
  color: ${(props) => props.theme.text};
  font-weight: bold;
  line-height: 1.3;
  margin-bottom: 0.75rem;
  transition: color 0.2s;
`;

const AuthorDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AuthorImage = styled.img`
  width: 32px;
  height: 2rem;
  border-radius: 50%;
`;

const AuthorText = styled.span.attrs(({ darkMode }) => ({
  darkMode,
}))`
  font-size: 0.875rem;
  color: ${(props) => props.theme.text};
  opacity: 0.5;
  transition: color 0.2s, opacity 0.2s;
`;

const Card = ({ cardData, darkMode }) => {
  return (
    <CardContainer>
      <CardImage src={cardData?.image} alt="Card visual" />
      <CategoryButton>{cardData?.category}</CategoryButton>
      <Title darkMode={darkMode}>{cardData?.title}</Title>
      <AuthorDetails>
        <AuthorImage src={cardData?.authorImage} alt={cardData?.authorName} />
        <AuthorText darkMode={darkMode}>{cardData?.authorName}</AuthorText>
        <AuthorText darkMode={darkMode}>{cardData?.date}</AuthorText>
      </AuthorDetails>
    </CardContainer>
  );
};

export default Card;
