import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Textarea from "../../components/Textarea";

// Styled Components
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 36px;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const Subheading = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
  font-family: sans-serif;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.border};
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  margin-top: 2rem;
`;

const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

function Form() {
  return (
    <FormWrapper>
      <Heading>Get In Touch</Heading>
      <Subheading>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        nihil?
      </Subheading>

      <FormContainer>
        <FormElement>
          <Input label="First Name" placeholder="Enter First Name" />
          <Input label="Last Name" placeholder="Enter Last Name" />
          <Input label="Email" type="email" placeholder="Enter Email" />
          <Input label="Phone" type="text" placeholder="Enter Phone No" />
          <Textarea
            label="Message"
            placeholder="Enter Message..."
            rows="5"
            cols="30"
          />
          <Button>Send</Button>
        </FormElement>
      </FormContainer>
    </FormWrapper>
  );
}

export default Form;
