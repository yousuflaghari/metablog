import Form from "./Form";
import ThemeBtn from "../../components/ThemeBtn";
import styled from "styled-components";

// Styled components
const SignUpWrapper = styled.div`
  background-color: skyblue;
  dark: bg-black;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  position: relative;
  @media (min-width: 640px) {
    padding-top: 19.5px;
    padding-bottom: 21.5px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const ThemeButtonWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 6px;
  @media (min-width: 640px) {
    top: 5px;
    right: 10px;
  }
`;

function SignUp() {
  return (
    <SignUpWrapper>
      <Form />
      <ThemeButtonWrapper>
        <ThemeBtn />
      </ThemeButtonWrapper>
    </SignUpWrapper>
  );
}

export default SignUp;
