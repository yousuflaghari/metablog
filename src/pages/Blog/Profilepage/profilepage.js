import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: #f4f4f4;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ImagePreview = styled.img`
  max-width: 100px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    email: "",
    dateOfBirth: "",
    city: "",
    profilePicture: null,
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const parsedUser = JSON.parse(storedUser);
    const { email, name } = parsedUser.user;
    console.log(email, name);
    setUserInfo((prev) => ({
      ...prev,
      firstName: name,
      email: email,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserInfo((prev) => ({
        ...prev,
        profilePicture: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Info:", userInfo);
    // Yahan data ko API ya backend ko submit karein
  };

  return (
    <ProfileContainer>
      <h2>Create Your Profile</h2>
      <FormContainer onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="firstName"
          value={userInfo.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <InputField
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <InputField
          type="date"
          name="dateOfBirth"
          value={userInfo.dateOfBirth}
          onChange={handleChange}
          placeholder="Date of Birth"
          required
        />
        <InputField
          type="text"
          name="city"
          value={userInfo.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        <label htmlFor="profilePicture">Profile Picture</label>
        <InputField
          type="file"
          name="profilePicture"
          accept="image/*"
          onChange={handleImageChange}
        />
        {userInfo.profilePicture && (
          <ImagePreview src={userInfo.profilePicture} alt="Profile Preview" />
        )}
        <Button type="submit">Create Profile</Button>
      </FormContainer>
    </ProfileContainer>
  );
};

export default ProfilePage;
