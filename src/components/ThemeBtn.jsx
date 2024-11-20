import styled from "styled-components";
import { useToggleTheme } from "../contexts/ToggleThemeContext";

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
  background-color: ${({ theme }) => theme.background};
  border-radius: 9999px;
  position: relative;
  border: 1px solid;
  transition: background-color 0.3s ease;
`;

const SwitchBall = styled.div`
  position: absolute;
  top: 2px;
  left: ${({ isDarkMode }) => (isDarkMode ? "20px" : "2px")};
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${({ theme }) => theme.text};
  border-radius: 9999px;
  transition: transform 0.3s ease;

  border: 1px solid ${({ theme }) => theme.border};
`;

const ThemeBtn = () => {
  const { darkMode, toggleDarkMode } = useToggleTheme();

  return (
    <SwitchWrapper>
      <SwitchLabel>
        <HiddenCheckbox
          type="checkbox"
          onChange={toggleDarkMode}
          checked={darkMode}
          value={darkMode}
        />
        <SwitchTrack>
          <SwitchBall isDarkMode={darkMode} />
        </SwitchTrack>
      </SwitchLabel>
    </SwitchWrapper>
  );
};

export default ThemeBtn;
