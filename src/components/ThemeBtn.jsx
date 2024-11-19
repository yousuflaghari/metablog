import styled from "styled-components";
import useTheme from "../contexts/ThemeContext";

const SwitchWrapper = styled.div`
  display: inline-block;
`;

const SwitchLabel = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input`
  display: none;
`;

const SwitchTrack = styled.div`
  width: 2.75rem;
  height: 1.5rem;
  background-color: ${({ theme }) =>
    theme === "dark" ? "#4B5563" : "#E5E7EB"};
  border-radius: 9999px;
  position: relative;
  transition: background-color 0.3s ease;
`;

const SwitchBall = styled.div`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 1.25rem;
  height: 1.25rem;
  background-color: white;
  border-radius: 9999px;
  transition: transform 0.3s ease;
  border: 1px solid ${({ theme }) => (theme === "dark" ? "#4B5563" : "#D1D5DB")};
  transform: ${({ isChecked }) =>
    isChecked ? "translateX(1.25rem)" : "translateX(0)"};
`;

const ThemeBtn = ({ className = "" }) => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <SwitchWrapper className={className}>
      <SwitchLabel>
        <HiddenCheckbox
          type="checkbox"
          onChange={onChangeBtn}
          checked={themeMode === "dark"}
        />
        <SwitchTrack theme={themeMode}>
          <SwitchBall isChecked={themeMode === "dark"} />
        </SwitchTrack>
      </SwitchLabel>
    </SwitchWrapper>
  );
};

export default ThemeBtn;
