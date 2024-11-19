import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeBtn from "../components/ThemeBtn";
import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 96px;
  padding-bottom: 32px;
  background-color: ${(props) => (props.darkMode ? "#0c0c0c" : "#ffffff")};
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    padding-bottom: 0;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const Navlink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#000000")};
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  padding-right: 12px;
  padding-left: 12px;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
    font-weight: bold;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  padding-left: 16px;

  h2 {
    font-size: 28px;
    color: ${(props) => (props.darkMode ? "#ffffff" : "#000000")};
    span {
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    padding-left: 0;
  }
`;

const Menu = styled.ul`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  flex: 3;
  justify-content: center;
  gap: 8px;
  position: absolute;
  top: 128px;
  width: 100%;
  background-color: ${(props) => (props.darkMode ? "#0c0c0c" : "#87ceeb")};
  border-radius: 0 0 12px 12px;
  transition: top 0.7s ease-in-out;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 8px;
    position: static;
    background-color: transparent;
    top: initial;
  }
`;

const MenuItem = styled.li`
  font-size: 20px;
  color: ${(props) => (props.active ? "#000000" : "#ffffff")};
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  padding-right: 12px;
  padding-left: 12px;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 166px;
  height: 36px;
  flex: 1;
  max-width: 240px;

  input {
    padding-left: 16px;
    padding-right: 40px;
    width: 100%;
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 8px;
    background-color: ${(props) => (props.darkMode ? "#333333" : "#f6f6f7")};
    border: 1px solid ${(props) => (props.darkMode ? "#ffffff" : "#000000")};
    color: ${(props) => (props.darkMode ? "#ffffff" : "#000000")};
    outline: none;
  }

  svg {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    color: ${(props) => (props.darkMode ? "#ffffff" : "#999999")};
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar darkMode={darkMode}>
        <LogoContainer darkMode={darkMode}>
          <img src={`/images/Logo.png`} alt="Logo" className="w-10" />
          <h2>
            Meta<span>Blog</span>
          </h2>
        </LogoContainer>
        <Menu isOpen={isOpen} darkMode={darkMode}>
          <MenuItem>
            <Navlink to="/" darkMode={darkMode} active={false}>
              Home
            </Navlink>
          </MenuItem>
          <MenuItem>
            <Navlink to="/blog" darkMode={darkMode} active={false}>
              Blog
            </Navlink>
          </MenuItem>
          <MenuItem>
            <Navlink to="/single-post" darkMode={darkMode} active={false}>
              Single Post
            </Navlink>
          </MenuItem>
          <MenuItem>
            <Navlink to="/pages" darkMode={darkMode} active={false}>
              Pages
            </Navlink>
          </MenuItem>
          <MenuItem>
            <Navlink to="/contact" darkMode={darkMode} active={false}>
              Contact
            </Navlink>
          </MenuItem>
        </Menu>

        <div className="flex items-center gap-2">
          <SearchContainer darkMode={darkMode}>
            <input type="search" placeholder="Search..." />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </SearchContainer>

          <ThemeBtn toggleTheme={toggleTheme} />
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
