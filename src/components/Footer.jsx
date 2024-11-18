import React from "react";
import styled from "styled-components";
import { mail } from "./Images";
import InputField from "../shared/InputField";

const FooterContainer = styled.div`
  background: var(--dark-shine);
`;

const FooterWrapper = styled.div`
  display: grid;
  gap: 1rem;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  padding-top: 2rem;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  padding: 1rem;
  color: white;
`;

const Title = styled.h4`
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const QuickLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
`;

const CategoryLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
`;

const NewsletterCard = styled.div`
  background: var(--dark-mat);
  padding: 1.5rem;
  border-radius: 0.75rem;
`;

const NewsletterTitle = styled.h5`
  color: white;
`;

const NewsletterText = styled.p`
  color: var(--muted-text);
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
`;

const SubscribeButton = styled.button`
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  color: white;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BrandName = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
`;

const RightsText = styled.div`
  color: var(--muted-text);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Row>
          <Column>
            <Title>About</Title>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div>
              <div>
                Email: <span className="text-muted">admin@gmail.com</span>
              </div>
              <div>
                Phone: <span className="text-muted">+92-3314487050</span>
              </div>
            </div>
          </Column>
          <Column>
            <h5>Quick Links</h5>
            <QuickLinks>
              <ListItem>
                <a href="/" className="text-muted">
                  Home
                </a>
              </ListItem>
              <ListItem>
                <a href="/blog" className="text-muted">
                  Blog
                </a>
              </ListItem>
              <ListItem>
                <a href="/contact-us" className="text-muted">
                  Contact
                </a>
              </ListItem>
            </QuickLinks>
          </Column>
          <Column>
            <h5>Category</h5>
            <CategoryLinks>
              <ListItem>
                <a href="#" className="text-muted">
                  Lifestyle
                </a>
              </ListItem>
              <ListItem>
                <a href="#" className="text-muted">
                  Technology
                </a>
              </ListItem>
              <ListItem>
                <a href="#" className="text-muted">
                  Travel
                </a>
              </ListItem>
              <ListItem>
                <a href="#" className="text-muted">
                  Business
                </a>
              </ListItem>
              <ListItem>
                <a href="#" className="text-muted">
                  Economy
                </a>
              </ListItem>
              <ListItem>
                <a href="#" className="text-muted">
                  Sports
                </a>
              </ListItem>
            </CategoryLinks>
          </Column>
          <Column>
            <NewsletterCard>
              <div className="card-body text-center">
                <NewsletterTitle>Weekly Newsletter</NewsletterTitle>
                <NewsletterText>
                  Get blog articles and offers via email
                </NewsletterText>
                <FormWrapper>
                  <div className="position-relative">
                    <InputField
                      type="email"
                      placeholder="Your Email"
                      required
                    />
                    <img src={mail} className="position-absolute email-icon" />
                  </div>
                  <SubscribeButton type="submit">Subscribe</SubscribeButton>
                </FormWrapper>
              </div>
            </NewsletterCard>
          </Column>
        </Row>
        <hr className="text-muted" />
        <FooterBottom>
          <LogoContainer>
            <img className="brand-logo" alt="Brand Logo" />
            <BrandName href="/">
              Meta <span className="fw-bold">Blog</span>
            </BrandName>
          </LogoContainer>
          <RightsText>
            © JS Template 2023.{" "}
            <span className="text-muted">All Rights Reserved.</span>
          </RightsText>
          <div className="d-flex gap-4 text-muted">
            <div>Terms of Use</div>
            <div>Privacy Policy</div>
            <div>Cookie Policy</div>
          </div>
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
