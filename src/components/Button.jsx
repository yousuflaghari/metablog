import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem 0.75rem;
  font-weight: 600;
  border-radius: 0.5rem;
  color: ${(props) => props.textColor || "black"};
  background-color: ${(props) => props.bgColor || "skyblue"};
  border: ${(props) => (props.darkMode ? "1px solid white" : "none")};
  color: ${(props) => (props.darkMode ? "white" : props.textColor)};
  background-color: ${(props) => (props.darkMode ? "black" : props.bgColor)};

  &:hover {
    opacity: 0.9;
  }
`;

function Button({
  children,
  type = "button",
  bgColor = "skyblue",
  textColor = "black",
  darkMode = false,
  className = "",
  ...props
}) {
  return (
    <StyledButton
      type={type}
      bgColor={bgColor}
      textColor={textColor}
      darkMode={darkMode}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
