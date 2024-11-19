import styled from "styled-components";
import Card from "../../components/Card";

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
  const Carddata = [
    {
      image: "/images/author1.png",
      category: "Technology",
      title:
        "The Impact on The Technology on the Workplace: How Technology is Changing",
      authorName: "Tracey wilsom",
      authorImage: "/images/Tracey wilsom.png",
      date: "November 10, 2024",
    },
    {
      image: "/images/author2.png",
      category: "Technology",
      title:
        "The Impact on The Technology on the Workplace: How Technology is Changing",
      authorName: "Elizabth Slavin",
      authorImage: "/images/Elizabth Slavin.png",
      date: "November 12, 2024",
    },
    {
      image: "/images/author3.png",
      category: "Technology",
      title:
        "The Impact on The Technology on the Workplace: How Technology is Changing",
      authorName: "Eric Smith",
      authorImage: "/images/Eric Smith.png",
      date: "November 15, 2024",
    },
    {
      image: "/images/author4.png",
      category: "Technology",
      title:
        "The Impact on The Technology on the Workplace: How Technology is Changing",
      authorName: "Ernei Smith",
      authorImage: "/images/Ernei Smith.png",
      date: "November 15, 2024",
    },
    {
      image: "/images/author5.png",
      category: "Technology",
      title:
        "The Impact on The Technology on the Workplace: How Technology is Changing",
      authorName: "Jason fransico",
      authorImage: "/images/Jason fransico.png",
      date: "November 15, 2024",
    },
    {
      image: "/images/author6.png",
      category: "Technology",
      title:
        "The Impact on The Technology on the Workplace: How Technology is Changing",
      authorName: "Ernai Smith",
      authorImage: "/images/Ernai Smith.png",
      date: "November 15, 2024",
    },
    {
      image: "/images/author7.png",
      category: "Technology",
      title:
        "The Impact on The Technology on the Workplace: How Technology is Changing",
      authorName: "Jason fransico",
      authorImage: "/images/Jason fransico.png",
      date: "November 15, 2024",
    },
    {
      image: "/images/author8.png",
      category: "Technology",
      title:
        "The Impact on The Technology on the Workplace: How Technology is Changing",
      authorName: "Eric Smith",
      authorImage: "/images/Eric Smith.png",
      date: "November 15, 2024",
    },
    {
      image: "/images/author9.png",
      category: "Technology",
      title:
        "The Impact on The Technology on the Workplace: How Technology is Changing",
      authorName: "Tracey Wilson",
      authorImage: "/images/Tracey Wilson.png",
      date: "November 15, 2024",
    },
  ];

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
