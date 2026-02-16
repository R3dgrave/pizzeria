import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
    navigate("/login");
  };

  const loginFetch = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        setUser({ email: data.email });
        setIsAuthenticated(true);
        profileFetch();
        navigate("/profile");
      }
    } catch (error) {
      alert("error al iniciar session", error);
    }
  };

  const registerFetch = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        loginFetch(email, password);
      }
    } catch (error) {
      alert("error al registrarse", error);
    }
  };

  const profileFetch = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const response = await fetch("http://localhost:5000/api/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        logout,
        loginFetch,
        registerFetch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
