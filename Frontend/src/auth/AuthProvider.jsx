/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext({
  user: null,
  handleLogin: (token) => {},
  handleLogout: () => {},
});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();

   const handleLogin = (token) => {
    
	const decodedUser = jwtDecode(token);

    localStorage.setItem("userId", decodedUser.sub);
    localStorage.setItem("userRole", decodedUser.role);
    localStorage.setItem("token", token);

    setUser(decodedUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
    localStorage.removeItem("token");
    setUser();
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
