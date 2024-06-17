"use client";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(false);

  const values = {
    session,
    setSession
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
    
}


AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export const useAuth = () => useContext(AuthContext);
  export default AuthContext;