import { useContext, useEffect } from "react";
import { ThemeContext } from "../context";
type Props = {
  changeTheme: (theme: string) => void;
};
function ThemeSwitch({ changeTheme }: Props) {
  const theme = useContext(ThemeContext);
  const altTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#333";
  }, [theme]);

  return (
    <button onClick={() => changeTheme(altTheme)}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
export default ThemeSwitch;
