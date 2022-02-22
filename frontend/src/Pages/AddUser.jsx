import { useRef } from "react";

export default function AddUser() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const newUser = { name, email, phone };
    // console.log(newUser);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
  };
  return (
    <div className="container">
      <form onSubmit={handleAddUser}>
        <div className="form-group mt-5">
          <input
            type="text"
            className="form-control mt-2"
            id="name"
            placeholder="Enter name"
            ref={nameRef}
          />
          <input
            className="form-control mt-2"
            type="email"
            placeholder="Enter your email address"
            name=""
            id=""
            ref={emailRef}
          />
          <input
            className="form-control mt-2"
            type="number"
            placeholder="Enter a number"
            name=""
            id=""
            ref={phoneRef}
          />
          <input
            className="btn btn-success mt-2"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}
