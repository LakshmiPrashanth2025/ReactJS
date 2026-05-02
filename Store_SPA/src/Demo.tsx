import { useEffect, useState } from "react";
import Card from "./components/Card";

function Demo() {
  // must return something always
  // always return only one single consolidated html
  const name = "mike";
  const [count, setCount] = useState(1);
  console.log("render called", count);
  // mounting
  useEffect(
    () => {
      console.log("effect function called");
    },
    [
      // dependencies
      // value changes of these will impact the execution of the effect function
      // empty : no deps : mounting : on load
    ]
  );
  // updating
  useEffect(() => {
    console.log("update function called");
  }, [
    // props, state, context
    count,
  ]);
  // unmounting
  useEffect(() => {
    console.log("unmount function called");
    return () => {
      console.log("cleanup function called");
    };
  }, []);

  return (
    <Card>
      <h1>Demo Component</h1>
      <p>some more html content</p>
      <p>Hello {name}</p>
      <p>{name.toUpperCase()}</p>
      <p>{9 + 8}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </Card>
  );
}
export default Demo;
