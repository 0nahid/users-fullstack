export default function AddUser() {
  return (
    <div className="container">
      <form action="">
        <div className="form-group mt-5">
          <input
            type="text"
            className="form-control mt-2"
            id="name"
            placeholder="Enter name"
          />
          <input
            className="form-control mt-2"
            type="email"
            placeholder="Enter your email address"
            name=""
            id=""
          />
          <input
            className="form-control mt-2"
            type="number"
            placeholder="Enter a number"
            name=""
            id=""
          />
          <input className="btn btn-success mt-2" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
