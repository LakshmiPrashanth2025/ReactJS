import { PropsWithChildren, useContext } from "react";
import { ThemeContext } from "../context";

function Card({ children }: PropsWithChildren) {
  const theme = useContext(ThemeContext);
  const color = theme === "light" ? "#333" : "#fff";
  return (
    <div className="card" style={{ color }}>
      {children}
    </div>
  );
}
export default Card;
