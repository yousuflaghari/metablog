import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
const Main = styled.div`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
`;
function Layout() {
  return (
    <Main>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Main>
  );
}

export default Layout;
