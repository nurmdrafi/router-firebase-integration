import React from "react";


const Register = () => {
  return (
    <div>
      <h3 className="text-center mb-5 mt-3">Please Register</h3>
      <form style={{maxWidth: '400px'}} className="d-flex flex-column mx-auto">
        <input className="input-group-text text-start" type="text" name="name" id="name" placeholder="Your Name" />
        <br />
        <input className="input-group-text text-start" type="email" name="email" id="email" placeholder="Your Email" />
        <br />
        <input className="input-group-text text-start" type="password" name="password" id="password" placeholder="Your Password" />
        <br />
        <button className="btn btn-primary" type="submit" >Register</button>
      </form>
    </div>
  );
};

export default Register;
