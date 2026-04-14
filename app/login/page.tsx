import React from "react";
import { login } from "../action/login";

const Login = () => {
  return (
    <div className="p-4">
      <form action={login}>
        <select name="role" className="border border-blue-600">
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <button className="bg-amber-300 ml-4 p-1">login</button>
      </form>
    </div>
  );
};

export default Login;
