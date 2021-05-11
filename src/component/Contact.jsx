import React, { useState } from "react";

function Contact() {
  const [input, setinput] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const inputEvent = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);

    const { value, name } = e.target;
    setinput((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${input.fullName} Phone: ${input.phone} Email: ${input.email} Message: ${input.message}`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={input.fullName}
                  onChange={inputEvent}
                  placeholder="Enter your Full Name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="Number"
                  className="form-control"
                  name="phone"
                  value={input.phone}
                  onChange={inputEvent}
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={input.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={input.message}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
