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
  background-color: ${(props) => props.theme.background};
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
  color: ${(props) => props.theme.text};
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
    color: ${(props) => props.theme.text};
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
  list-style-type: none;
  top: 128px;
  background-color: ${(props) => props.theme.background};
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
  color: ${(props) => props.theme.text};
`;

const SearchContainer = styled.div`
  position: relative;
  width: 166px;
  height: 36px;
  display: flex;
  padding: 0px;
  align-items: center;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 8px;
  background-color: ${(props) => props.theme.background};
`;

const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  border-radius: 8px;
  padding: 12px;
  background-color: transparent;
  color: ${(props) => props.theme.text};
  outline: none;
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 12px;
  color: ${(props) => props.theme.text};
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
  return (
    <HeaderContainer>
      <Navbar>
        <LogoContainer>
          <img src={`/images/Logo.png`} alt="Logo" className="w-10" />
          <h2>
            Meta<span>Blog</span>
          </h2>
        </LogoContainer>
        <Menu>
          <MenuItem>
            <Navlink to="/">Home</Navlink>
          </MenuItem>
          <MenuItem>
            <Navlink to="/blog">Blog</Navlink>
          </MenuItem>
          <MenuItem>
            <Navlink to="/single-post">Single Post</Navlink>
          </MenuItem>
          <MenuItem>
            <Navlink to="/pages">Pages</Navlink>
          </MenuItem>
          <MenuItem>
            <Navlink to="/contact">Contact</Navlink>
          </MenuItem>
        </Menu>

        <ThemeButtonContainer>
          <SearchContainer>
            <SearchInput placeholder="Search..." />
            <SearchIcon>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SearchIcon>
          </SearchContainer>
          <ThemeBtn />
        </ThemeButtonContainer>
      </Navbar>
    </HeaderContainer>
  );
}

export default Header;
