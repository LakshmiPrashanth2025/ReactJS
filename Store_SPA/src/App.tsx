import { useEffect, useState } from "react";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeProvider } from "./context";
import { BrowserRouter } from "react-router";
import AppRouter from "./routes";
import Menu from "./components/Menu";

function App() {
  const [theme, setTheme] = useState("light");

  const updateTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider value={theme}>
        <Menu />
        <ThemeSwitch changeTheme={updateTheme} />
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
