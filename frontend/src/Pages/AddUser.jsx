import { useRef } from "react";
import Swal from "sweetalert2";

const AddUser = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleAddUser = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const newUser = { name, email, phone };
    console.log(newUser);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Good job!", "User added to database!", "success");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div className="container mt-5">
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          name=""
          className="form-control mt-2"
          ref={nameRef}
          placeholder="Enter your name"
          autoComplete="on"
          required
          id=""
        />
        <input
          type="email"
          name=""
          className="form-control mt-2"
          ref={emailRef}
          placeholder="Enter your email"
          autoComplete="on"
          required
          id=""
        />
        <input
          type="number"
          name=""
          className="form-control mt-2"
          ref={phoneRef}
          placeholder="Enter your number"
          required
          autoComplete="on"
          id=""
        />
        <input className="btn btn-success mt-2" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddUser;
