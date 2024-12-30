// login logout
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import {
  verifyAuth,
  loginService,
  logoutService,
  signUpService,
} from "@/app/services";


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState("");
  const [autherror, setautherror] = useState({message:""});

  useEffect(() => {
    const verify = async () => {
      const response = await verifyAuth();
      const { success, email, username, userId, questions } = response.data;
      if(userId){
        if (success) {
          setuser({ username, email, userId, questions });
          setautherror({message:""})
        }else{
          const {error} = response.data;
          setautherror({message:error ? error :"Failed, Something is wrong, try again"})
        }
      }
    };

    if (!user) {
      verify();
    }
  }, []);

  const signup = async (formData) => {
    const response = await signUpService(formData);
    const { success, email, username, userId,questions } = response.data;
    if (success) {
      setuser({ username, email, userId,questions});
      setautherror({message:""})
      return true;
    }else{
      const {error} = response.data;
      setautherror({message:error ? error :"Failed, Something is wrong, try again"})
    }
    return false;
  };

  const login = async (formdata) => {
    const response = await loginService(formdata);
    const { success, email, username, userId, questions } = response.data;

    if (success) {
      setuser({ username, email,userId, questions });
      setautherror({message:""})
      return true;
    } else{
      const {error} = response.data;
      setautherror({message:error ? error :"Failed, Something is wrong, try again"})
    }
    return false;
  };

  const logout = async () => {
    const response = await logoutService();
    if (response.data.success) {
      setuser("");
      setautherror({message:""})
    }else{
      const {error} = response.data;

      setautherror({message:"Failed, Something is wrong, try again"})
    }
  };

  return (
    <AuthContext.Provider value={{ login, user, logout, signup, autherror }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
