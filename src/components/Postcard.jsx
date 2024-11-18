import React from "react";
import {
  autherCard1,
  autherCard2,
  autherCard3,
  homecard1,
  homecard2,
  homecard3,
} from "../components/Images";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  color: white;
`;

const CardContainer = styled.div`
  display: grid;
  gap: 20px;
  margin: 20px 0;
`;

const CardRow = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  border: 1px solid #333;
  border-radius: 10px;
  color: white;
  background-color: #212121;
`;

const CardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const Badge = styled.h4`
  background-color: #007bff;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
`;

const CardTitle = styled.h3`
  margin: 10px 0;
`;

const CardFooter = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AuthorInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const AuthorName = styled.span`
  font-size: 14px;
`;

const Date = styled.span`
  font-size: 14px;
`;

const ViewAllButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const ViewAllButton = styled.button`
  background-color: transparent;
  border: 1px solid #333;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #333;
    border-color: #007bff;
  }
`;

function PostCards() {
  return (
    <Container>
      <Title>Latest Post</Title>
      <CardContainer>
        <CardRow>
          <div>
            <Card>
              <CardBody>
                <CardImage src={homecard1} alt="Home Card 1" />
                <Badge>Technology</Badge>
                <CardTitle>
                  How Emerging Technologies Are Transforming Everyday Life
                </CardTitle>
              </CardBody>
              <CardFooter>
                <AuthorInfo>
                  <AuthorImage src={autherCard1} alt="Author" />
                  <AuthorName>Tracey Wilson</AuthorName>
                </AuthorInfo>
                <Date>Date: August 20, 2024</Date>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardBody>
                <CardImage src={homecard2} alt="Home Card 2" />
                <Badge>Technology</Badge>
                <CardTitle>
                  How Emerging Technologies Are Transforming Everyday Life
                </CardTitle>
              </CardBody>
              <CardFooter>
                <AuthorInfo>
                  <AuthorImage src={autherCard2} alt="Author" />
                  <AuthorName>Jason Francisco</AuthorName>
                </AuthorInfo>
                <Date>Date: August 20, 2024</Date>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardBody>
                <CardImage src={homecard3} alt="Home Card 3" />
                <Badge>Technology</Badge>
                <CardTitle>
                  How Emerging Technologies Are Transforming Everyday Life
                </CardTitle>
              </CardBody>
              <CardFooter>
                <AuthorInfo>
                  <AuthorImage src={autherCard3} alt="Author" />
                  <AuthorName>Elizabeth Slavin</AuthorName>
                </AuthorInfo>
                <Date>Date: August 20, 2024</Date>
              </CardFooter>
            </Card>
          </div>
        </CardRow>
      </CardContainer>

      <ViewAllButtonContainer>
        <a href="/blog">
          <ViewAllButton>View All Post</ViewAllButton>
        </a>
      </ViewAllButtonContainer>
    </Container>
  );
}

export default PostCards;
