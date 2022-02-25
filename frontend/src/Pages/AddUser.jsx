import { useRef } from "react";
import Swal from "sweetalert2";

// create user with useRef
const AddUser = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  // handle add user info
  const handleAddUser = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const newUser = { name, email, phone };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // shows sweet alert
          Swal.fire("Good job!", "User added to database!", "success");
          e.target.reset();
        } else {
          Swal.fire("Oops!", "Something went wrong!", "error");
        }
      });
    e.preventDefault();
  };
  return (
    <div className="container mt-5">
      <h1>Add user here...</h1>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          name=""
          ref={nameRef}
          className="form-control my-2"
          placeholder="Enter your name"
          autoComplete="on"
          required
          id=""
        />
        <input
          type="email"
          name=""
          ref={emailRef}
          className="form-control my-2"
          placeholder="Enter your email"
          autoComplete="on"
          required
          id=""
        />
        <input
          type="number"
          name=""
          ref={phoneRef}
          className="form-control my-2"
          placeholder="Enter your number"
          required
          autoComplete="on"
          id=""
        />
        <input className="btn btn-success" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddUser;
