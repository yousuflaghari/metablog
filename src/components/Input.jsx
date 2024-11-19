import React from "react";
import styled from "styled-components";
import { useId } from "react";

// Styled Components
const InputWrapper = styled.div`
  width: 100%;
`;

const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.25rem;
  padding-left: 0.25rem;
  font-family: sans-serif;
  font-weight: bold;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  transition: color 0.2s;
`;

const StyledInput = styled.input`
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  background-color: ${({ darkMode }) => (darkMode ? "white" : "#f0f0f0")};
  outline: none;
  transition: background-color 0.2s, color 0.2s;

  &:focus {
    box-shadow: 0 0 0 2px ${({ darkMode }) => (darkMode ? "#333" : "#007bff")};
  }
`;

// Input Component
const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", darkMode = false, ...props },
  ref
) {
  const id = useId();

  return (
    <InputWrapper className={className}>
      {label && (
        <StyledLabel htmlFor={id} darkMode={darkMode}>
          {label}
        </StyledLabel>
      )}
      <StyledInput
        type={type}
        id={id}
        ref={ref}
        darkMode={darkMode}
        {...props}
      />
    </InputWrapper>
  );
});

export default Input;
