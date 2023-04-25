import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/auth-slice";


const Login = () => {
   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
   const dispatch = useDispatch();
    const navigate = useNavigate();

   const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(authActions.login());
    navigate("/Products");
   }

    return (
      <div class="container">
        <br />
      <form onSubmit={handleSubmit}>
        <div class="form-outline mb-4">
          <input type="email" id="form2Example1" class="form-control" />
          <label class="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control" />
          <label class="form-label" for="form2Example2">
            Password
          </label>
        </div>

        <button type="submit" class="btn btn-primary btn-block mb-4">
          Log in
        </button>
      </form>
      {/* {isLoggedIn && <Products />} */}
    </div>
  );
};

export default Login;

  