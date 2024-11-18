import React from "react";
import styled from "styled-components";

// Styled Components
const BreadCrumbContainer = styled.div`
  display: grid;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
  text-align: center;
`;

const Title = styled.h1`
  color: #fff;
  margin: 0;
`;

const BreadcrumbNav = styled.nav`
  aria-label: breadcrumb;
`;

const BreadcrumbList = styled.ol`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;

  & > li {
    margin: 0 0.5rem;
    font-size: 14px;
  }
`;

const BreadcrumbItem = styled.li`
  & > a {
    text-decoration: none;
    color: #6c757d; /* Muted link color */
    transition: color 0.3s;

    &:hover {
      color: #fff; /* Highlight on hover */
    }
  }

  &.active {
    color: #fff; /* Active breadcrumb item */
    pointer-events: none;
  }
`;

function BreadCrumb() {
  return (
    <BreadCrumbContainer>
      <Title>Blog</Title>
      <BreadcrumbNav>
        <BreadcrumbList>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem className="active" aria-current="page">
            Blog
          </BreadcrumbItem>
        </BreadcrumbList>
      </BreadcrumbNav>
    </BreadCrumbContainer>
  );
}

export default BreadCrumb;
