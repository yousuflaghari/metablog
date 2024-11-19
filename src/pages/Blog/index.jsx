import styled from "styled-components";
import Banner from "./Banner";
import Container from "./Container";

// Styled Components
const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
`;

const PageTitle = styled.h1`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-size: 24px;
  margin: 0px;
`;

const Breadcrumbs = styled.ul`
  display: flex;
  padding: 0px;
  margin: 0px;
  align-items: center;
  gap: 12px;
`;

const BreadcrumbItem = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.text};
`;

const BannerWrapper = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  position: relative;

  @media (min-width: 640px) {
    margin-top: 4rem;
  }
`;

const BannerContent = styled.div`
  position: absolute;
  top: 25%;
  left: 10px;

  @media (min-width: 640px) {
    top: 50%;
    left: 40px;
  }
`;

const CategoryButton = styled.button`
  background-color: blue;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 12px;
  margin-bottom: 0.75rem;
`;

const BannerTitle = styled.h1`
  font-size: 20px;
  color: white;
  font-weight: bold;
  line-height: 1.5;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 28px;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const AuthorImage = styled.img`
  width: 2rem;
  margin-right: 1rem;
`;

const AuthorName = styled.span`
  font-size: 12px;
  color: white;
  opacity: 0.5;
  margin-right: 1.5rem;

  @media (min-width: 640px) {
    font-size: 16px;
  }
`;

const PublishDate = styled.span`
  font-size: 12px;
  color: white;
  opacity: 0.5;

  @media (min-width: 640px) {
    font-size: 16px;
  }
`;

function Blog() {
  return (
    <>
      <BlogWrapper>
        <PageTitle>Page Title</PageTitle>
        <Breadcrumbs>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Link One</BreadcrumbItem>
        </Breadcrumbs>
      </BlogWrapper>

      <BannerWrapper>
        <Banner>
          <BannerContent>
            <CategoryButton>Technology</CategoryButton>
            <BannerTitle>
              The Impact of Technology on the <br /> Workplace: How Technology
              is Changing
            </BannerTitle>

            <AuthorInfo>
              <AuthorImage src="/Images/author1.png" alt="Author" />
              <AuthorName>Jason Francisco</AuthorName>
              <PublishDate>October 22, 2024</PublishDate>
            </AuthorInfo>
          </BannerContent>
        </Banner>
      </BannerWrapper>

      <Container />
    </>
  );
}

export default Blog;
