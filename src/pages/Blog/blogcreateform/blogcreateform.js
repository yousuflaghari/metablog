import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const FormContainer = styled.form`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px 32px;
  max-width: 600px;
  margin: 40px auto;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  color: #333333;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #555555;
`;

const InputField = styled.input`
  padding: 12px 16px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  font-size: 16px;
  transition: border 0.2s;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

const TextAreaField = styled.textarea`
  padding: 12px 16px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  font-size: 16px;
  resize: vertical;
  transition: border 0.2s;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #3e8e41;
    transform: translateY(0);
  }
`;

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    text: "",
  });

  const [userInfo, setUserInfo] = useState({
    userName: "",
  });

  useEffect(() => {
    const parseduser = JSON.parse(localStorage.getItem("user"));
    const { name } = parseduser.user;

    setUserInfo({
      userName: name,
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      ...formData,
      userName: userInfo.userName,
    };

    // Save blog data to local storage
    const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    savedBlogs.push(blogData);
    localStorage.setItem("blogs", JSON.stringify(savedBlogs));

    try {
      const response = await axios.post("YOUR_API_ENDPOINT_HERE", blogData);
      console.log("Blog created successfully", response.data);
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Create a Blog</Title>

      <Label>Blog Title:</Label>
      <InputField
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        placeholder="Enter blog title"
        required
      />

      <Label>Category:</Label>
      <InputField
        type="text"
        name="category"
        value={formData.category}
        onChange={handleInputChange}
        placeholder="Enter blog category"
        required
      />

      <Label>Blog Text:</Label>
      <TextAreaField
        name="text"
        value={formData.text}
        onChange={handleInputChange}
        placeholder="Write your blog here..."
        rows="6"
        required
      />

      <Button type="submit">Create Blog</Button>
    </FormContainer>
  );
};

export default BlogForm;
