"use client";
import { createContext, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const values = {

  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
    
}


AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export const useAuth = () => useContext(AuthContext);
  export default AuthContext;