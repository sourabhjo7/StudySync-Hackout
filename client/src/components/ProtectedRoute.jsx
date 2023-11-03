import React, { Children, Component } from "react";
import { Navigate, Outlet, Route, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  console.log(isLoggedIn);
  if (isLoggedIn) {
    return children;
  }
  else{
    return<h1>UnAothorised </h1>
  }
  
};

export default ProtectedRoute;
