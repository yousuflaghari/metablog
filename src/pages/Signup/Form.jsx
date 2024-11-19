import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled components
const FormWrapper = styled.div`
  background-color: white;
  width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  border-radius: 12px;
  margin: 0 auto;
  border: 1px solid transparent; /* Default border */

  /* Dark mode styles */
  ${({ theme }) =>
    theme.mode === "dark" &&
    `
    background-color: black;
    border: 1px solid white;
  `}

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const Heading = styled.h1`
  color: black;

  /* Dark mode styles */
  ${({ theme }) =>
    theme.mode === "dark" &&
    `
    color: white;
  `}

  font-size: 24px;
  font-weight: bold;
  text-align: center;
  @media (min-width: 640px) {
    font-size: 36px;
  }
`;

const SubHeading = styled.p`
  color: black;
  opacity: 0.9;
  font-size: 18px;
  font-weight: 600;
  text-align: center;

  /* Dark mode styles */
  ${({ theme }) =>
    theme.mode === "dark" &&
    `
    color: white;
  `}

  @media (min-width: 640px) {
    font-size: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`;

const SubmitButtonWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInText = styled.p`
  color: black;
  text-align: center;
  font-weight: 600;
  font-family: sans-serif;

  /* Dark mode styles */
  ${({ theme }) =>
    theme.mode === "dark" &&
    `
    color: white;
  `}
`;

const SignInLink = styled(Link)`
  cursor: pointer;
  text-decoration: underline;
`;

function FormComponent() {
  return (
    <FormWrapper>
      <Heading>Create An Account</Heading>
      <SubHeading>
        Create an account to enjoy all the services without any ads for free!
      </SubHeading>
      <Form>
        <Input
          label="Full Name"
          placeholder="Enter Full Name"
          className="py-3"
        />
        <Input label="Username" placeholder="Enter Username" className="py-3" />
        <Input
          label="Email"
          type="email"
          placeholder="Enter Email"
          className="py-3"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter Password"
          className="py-3"
        />
        <SubmitButtonWrapper>
          <Button
            children={"Create Account"}
            className="w-[200px] py-4 rounded-xl font-bold text-[20px]"
          />
        </SubmitButtonWrapper>
        <SignInText>
          Already Have An Account?{" "}
          <SignInLink to={"/login"}>Sign In</SignInLink>
        </SignInText>
      </Form>
    </FormWrapper>
  );
}

export default FormComponent;
