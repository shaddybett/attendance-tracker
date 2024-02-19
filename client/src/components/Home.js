import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e, role) {
    e.preventDefault();
    if (!role) {
      setError("Please select a role");
      return;
    }

    let url = "";
    if (role === "admin") {
      url = "http://localhost:4000/admin";
    } else if (role === "teacher") {
      url = "http://localhost:4000/teacher/login";
    } else if (role === "student") {
      url = "http://localhost:4000/student";
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          if (role === "admin") {
            navigate("/admin");
          } else if (role === "teacher") {
            navigate("/teacher");
          } else if (role === "student") {
            navigate("/student");
          }
        } else {
          setError("Incorrect username or password");
        }
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        setError("An error occurred. Please try again later.");
      });
  }

  return (
    <div>
      <h3>Select Your Role</h3>
      <form>
        <label>
          <input
            type="radio"
            name="role"
            value="admin"
            onChange={() => setUsername("")}
          />
          Admin
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="teacher"
            onChange={() => setUsername("")}
          />
          Teacher
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="student"
            onChange={() => setUsername("")}
          />
          Student
        </label>
        <input
          type="text"
          placeholder="Enter your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) =>
            handleSubmit(
              e,
              document.querySelector('input[name="role"]:checked')?.value
            )
          }
        >
          Login
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Home;