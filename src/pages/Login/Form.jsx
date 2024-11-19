import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

// Styled Components
const FormWrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  @media (prefers-color-scheme: dark) {
    background-color: black;
    border: 1px solid white;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: black;
  @media (min-width: 640px) {
    font-size: 36px;
  }
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const Description = styled.p`
  margin-top: 1rem;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: black;
  @media (min-width: 640px) {
    font-size: 20px;
  }
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const FormButtonWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpText = styled.p`
  text-align: center;
  font-weight: 600;
  color: black;
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const SignUpLink = styled(Link)`
  cursor: pointer;
  text-decoration: underline;
`;

const Formlogin = () => {
  return (
    <FormWrapper>
      <Title>Login</Title>
      <Description>Please enter your Login and your Password</Description>
      <Form>
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
        <FormButtonWrapper>
          <Button
            children={"Login"}
            className="w-[150px] py-3 rounded-xl font-bold text-[20px]"
          />
        </FormButtonWrapper>
        <SignUpText>
          Not a member yet? <SignUpLink to={"/signUp"}>Sign Up</SignUpLink>
        </SignUpText>
      </Form>
    </FormWrapper>
  );
};

export default Formlogin;
