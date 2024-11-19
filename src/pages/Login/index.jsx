import styled from "styled-components";
import Form from "./Form";
import ThemeBtn from "../../components/ThemeBtn";

// Styled Components
const LoginWrapper = styled.div`
  background-color: skyblue;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  position: relative;

  @media (min-width: 640px) {
    background-color: transparent;
    padding-top: 84.5px;
    padding-bottom: 86.5px;
    background-color: black;
  }

  @media (prefers-color-scheme: dark) {
    background-color: black;
  }
`;

const ThemeButtonWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1.5rem;

  @media (min-width: 640px) {
    top: 1.25rem;
    right: 2.5rem;
  }
`;

function Login() {
  return (
    <LoginWrapper>
      <Form />
      <ThemeButtonWrapper>
        <ThemeBtn />
      </ThemeButtonWrapper>
    </LoginWrapper>
  );
}

export default Login;
