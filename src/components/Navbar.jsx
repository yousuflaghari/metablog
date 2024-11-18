import React from "react";
import { logo, searchOutline } from "./Images";
import InputField from "../shared/InputField";
import styled from "styled-components";

// Styled components
const NavbarContainer = styled.div`
  background-color: #343a40;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const BrandWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const BrandLogo = styled.img`
  width: 40px;
  height: auto;
`;

const BrandName = styled.a`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-right: 5rem;
`;

const NavbarLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

const ToggleSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchLabel = styled.label`
  color: white;
`;

const Switch = styled.input`
  margin-left: 10px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="container">
        <NavbarWrapper>
          <BrandWrapper>
            <BrandLogo src={logo} alt="Brand Logo" />
            <BrandName href="/">
              Meta <span className="fw-bold">Blog</span>
            </BrandName>
          </BrandWrapper>
          <div className="d-flex">
            <NavbarLinks>
              <NavbarLink href="/">Home</NavbarLink>
              <NavbarLink href="/blog">Blog</NavbarLink>
              <NavbarLink href="/contact-us">Contact</NavbarLink>
            </NavbarLinks>
            <div className="d-flex align-items-center gap-3">
              <SearchWrapper>
                <InputField type="search" placeholder="Search" required />
                <SearchIcon src={searchOutline} className="email-icon" />
              </SearchWrapper>
              <ToggleSwitchWrapper>
                <SwitchLabel htmlFor="flexSwitchCheckChecked">
                  <Switch
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    defaultChecked
                  />
                </SwitchLabel>
              </ToggleSwitchWrapper>
            </div>
          </div>
        </NavbarWrapper>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
