import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setLocalStorage } from "../../utils/index"; // Import utility function

// Styled Components
const FormWrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => (theme.mode === "dark" ? "white" : "black")};
  @media (min-width: 640px) {
    font-size: 36px;
  }
`;

const Description = styled.p`
  margin-top: 1rem;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => (theme.mode === "dark" ? "white" : "black")};
  @media (min-width: 640px) {
    font-size: 20px;
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
  color: ${({ theme }) => (theme.mode === "dark" ? "white" : "black")};
`;

const SignUpLink = styled(Link)`
  cursor: pointer;
  text-decoration: underline;
`;

const Formlogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        formData
      );

      if (response.status === 200) {
        // Save user data to local storage
        setLocalStorage("user", response.data);

        alert("Login successful");
        console.log("User Data:", response.data);

        // Navigate to dashboard or home page after successful login
        navigate("/"); // Change to your desired page
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormWrapper>
      <Title>Login</Title>
      <Description>Please enter your Login and your Password</Description>
      <Form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter Email"
          className="py-3"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter Password"
          className="py-3"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <FormButtonWrapper>
          <Button
            type="submit"
            className="w-[150px] py-3 rounded-xl font-bold text-[20px]"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </FormButtonWrapper>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        <SignUpText>
          Not a member yet? <SignUpLink to={"/signUp"}>Sign Up</SignUpLink>
        </SignUpText>
      </Form>
    </FormWrapper>
  );
};

export default Formlogin;
