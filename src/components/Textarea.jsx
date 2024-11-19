import React from "react";
import styled from "styled-components";
import { useId } from "react";

const TextareaWrapper = styled.div`
  width: 100%;
`;

const StyledLabel = styled.label`
  display: inline-block;
  padding-left: 0.25rem;
  margin-bottom: 0.25rem;
  font-family: sans-serif;
  font-weight: normal;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  transition: color 0.2s;
`;

const StyledTextarea = styled.textarea`
  padding: 0.75rem;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ darkMode }) => (darkMode ? "#fff" : "#f0f0f0")};
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  outline: none;
  resize: vertical;
  transition: background-color 0.2s, color 0.2s;

  &:focus {
    box-shadow: 0 0 0 2px ${({ darkMode }) => (darkMode ? "#333" : "#007bff")};
  }
`;

// Textarea Component
const Textarea = React.forwardRef(function Textarea(
  {
    label,
    textColor = "text-black",
    bgColor = "bg-gray-light",
    darkMode = false,
    className = "",
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <TextareaWrapper className={className}>
      {label && (
        <StyledLabel htmlFor={id} darkMode={darkMode}>
          {label}
        </StyledLabel>
      )}
      <StyledTextarea
        id={id}
        ref={ref}
        darkMode={darkMode}
        className={`${textColor} ${bgColor}`}
        {...props}
      />
    </TextareaWrapper>
  );
});

export default Textarea;
