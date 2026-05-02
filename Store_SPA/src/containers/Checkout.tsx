import { SyntheticEvent, useEffect, useRef, useState } from "react";

function Checkout() {
  const [name, setName] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const saveData = (ev: SyntheticEvent) => {
    ev.preventDefault(); // Prevent default form submission behavior
    console.log("Data saved", name, emailRef.current?.value);
  };
  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus(); // Focus on email input field when component mounts or updates
    }
  }, []);
  return (
    <form onSubmit={(e) => saveData(e)}>
      <h1>Checkout</h1>
      {/* CONTROLLED */}
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      {name === "" ? <small>Name is required</small> : null}
      {/* UNCONTROLLED */}
      <input type="text" placeholder="Email" ref={emailRef} />
      {emailRef.current && emailRef.current?.value === "" ? (
        <small>Email is required</small>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
}
export default Checkout;
