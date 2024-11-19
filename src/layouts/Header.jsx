import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeBtn from "../components/ThemeBtn";
import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = styled.nav`
  display: flex;
  width: 100%;
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
`;

const LogoContainer = styled.div`
  display: flex;
  flex: 1;
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
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 0px;
  top: 128px;
  background-color: ${(props) => (props.darkMode ? "#0c0c0c" : "#87ceeb")};
  border-radius: 0 0 12px 12px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 32px;
    position: static;
    background-color: transparent;
    top: initial;
  }
`;

const MenuItem = styled.li`
  font-size: 20px;
  color: ${(props) => (props.active ? "#000000" : "#ffffff")};
`;

const SearchContainer = styled.div`
  position: relative;
  width: 166px;
  height: 36px;
  display: flex;
  padding: 0px;
  align-items: center;
  border: 1px solid ${(props) => (props.darkMode ? "#ffffff" : "#000000")};
  border-radius: 8px;
  background-color: ${(props) => (props.darkMode ? "#333333" : "#f6f6f7")};
`;

const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  border-radius: 8px;
  padding: 12px;
  background-color: transparent;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#000000")};
  outline: none;
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 12px;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#999999")};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ThemeButtonContainer = styled.div`
  display: flex;
  flex: 1;
  width: 256px;
  height: 36px;
  align-items: center;
  gap: 12px;
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
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

        <ThemeButtonContainer>
          <SearchContainer darkMode={darkMode}>
            <SearchInput darkMode={darkMode} placeholder="Search..." />
            <SearchIcon darkMode={darkMode}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SearchIcon>
          </SearchContainer>
          <ThemeBtn toggleTheme={toggleTheme} />
        </ThemeButtonContainer>
      </Navbar>
    </HeaderContainer>
  );
}

export default Header;
