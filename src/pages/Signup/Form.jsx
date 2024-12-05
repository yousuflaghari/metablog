import React, { useState } from "react";
import axios from "axios";
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
  const [formData, setFormData] = useState({
    name: "",
    user_name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:5000/users",
        formData
      );
      setSuccess("Account created successfully!");
      setFormData({
        name: "",
        user_name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormWrapper>
      <Heading>Create An Account</Heading>
      <SubHeading>
        Create an account to enjoy all the services without any ads for free!
      </SubHeading>
      <Form onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          placeholder="Enter Full Name"
          className="py-3"
          onChange={handleChange}
        />
        <Input
          label="Username"
          name="user_name"
          value={formData.user_name}
          placeholder="Enter Username"
          className="py-3"
          onChange={handleChange}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          placeholder="Enter Email"
          className="py-3"
          onChange={handleChange}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          placeholder="Enter Password"
          className="py-3"
          onChange={handleChange}
        />
        <SubmitButtonWrapper>
          <Button
            type="submit"
            disabled={loading}
            className="w-[200px] py-4 rounded-xl font-bold text-[20px]"
          >
            {loading ? "Creating..." : "Create Account"}
          </Button>
        </SubmitButtonWrapper>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        {success && (
          <p style={{ color: "green", textAlign: "center" }}>{success}</p>
        )}
        <SignInText>
          Already Have An Account?{" "}
          <SignInLink to={"/login"}>Sign In</SignInLink>
        </SignInText>
      </Form>
    </FormWrapper>
  );
}

export default FormComponent;
