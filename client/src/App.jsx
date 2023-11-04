import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Explore from "./components/Explore.jsx/Explore";
import Courses from "./components/Courses/Courses";
import ProtectedRoute from "./components/ProtectedRoute";
import axios from "axios";
// REACT_APP_CLIENT_SECRET = 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
// REACT_APP_CLIENT_ID = 1059613361149-eti4d087cgueadgc6fmca1m1tsd1900k.apps.googleusercontent.com
const BaseServerURL = "http://localhost:3000";
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const init = async () => {
    const { status, data } = await axios.get(BaseServerURL + "/", {
      validateStatus: false,
      withCredentials: true,
    });
    console.log("status-", status, "data", data);
    if (status == 200) {
      console.log("reaching here");
      setisLoggedIn(true);
    }
  };

  useEffect(() => {
    console.log("this is from app.jsx useEffect");
    init();
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/explore"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Explore />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Courses />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h1>NOT Found </h1>} />
        </Routes>
      ) : (
        <Signin setisLoggedIn={setisLoggedIn} />
      )}
    </div>
  );
}

export default App;
