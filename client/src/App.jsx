import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Explore from "./components/Explore.jsx/Explore";
import Courses from "./components/courses/Courses";
import ProtectedRoute from "./components/ProtectedRoute";
import axios from "axios";
import Youtubeplayer from "./components/youtubeplayer/Youtubeplayer";

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
    else{
      setisLoggedIn(false);
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
            <Route
            path="/player/:playlistId"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
               <Youtubeplayer/>
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
