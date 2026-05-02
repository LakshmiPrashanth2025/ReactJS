import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1>Counter Page</h1>

      <h2 style={styles.count}>{count}</h2>

      <div style={styles.buttons}>
        <button onClick={() => setCount(count + 1)} style={styles.btn}>
          Increment
        </button>

        <button onClick={() => setCount(count - 1)} style={styles.btn}>
          Decrement
        </button>

        <button onClick={() => setCount(0)} style={styles.btn}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
  },
  count: {
    fontSize: "48px",
    margin: "20px 0",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  btn: {
    padding: "10px 15px",
    border: "none",
    background: "#2563eb",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
  },
};