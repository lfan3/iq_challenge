"use client";
import {
  Dialog,
  DialogPanel,
  DialogBackdrop,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";


//todo verify information from frontend
// send api
const LogForm = ({ setopen, open }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [displayNotif, setDisplayNotif] = useState(false);

  // 1 == signin 2==singup 3 account accreated
  const [signType, setSignType] = useState(1);
  const [errors, setErrors] = useState({});
  const [showAuthError, setShowAuthError] = useState(false);
  const {user,signup,login,autherror} = useAuth()

  useEffect(()=>{
    setErrors({})
    if ((user?.username) && (signType == 2 )) {
        setDisplayNotif(true);
        const timer = setTimeout(() => {
          setDisplayNotif(false);
        }, 1200);
        return () => {
          clearTimeout(timer);
        };
    }
    if(autherror.message){
      setopen(false)
      setShowAuthError(true)
      const timer = setTimeout(() => {
        setShowAuthError(false)
      }, 1200);
      return () => {
        clearTimeout(timer);
      };
    }
  },[signType, user?.username, autherror])

  const onClickSignUp = () => {
    setSignType(2);
  };

  const handleSignIn = () => {
    setSignType(1);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};

    if (!formData.username && signType == 2) {
      errors.username = "Username is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async () => {

    if (validate()) {
        if(signType == 2){
            const signed = await signup(formData)
            if(signed){
              setopen(false)
            }
        }else{
            const logged = await login(formData)
            if(logged){
                setopen(false)
            }
        }
    } else {
      setopen(true);
    }
  };

  return (
    <>
    <Dialog
      open={open}
      onClose={() => setopen(false)}
      className="relative z-50"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border bg-white px-10 py-7 rounded-lg">
          <div className="bg-white rounded py-1">
            {signType == 2 && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Username:
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
                  type="text"
                  placeholder="username"
                  name="username"
                  value={formData.username}
                  onChange={onChange}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                )}
              </div>
            )}

            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
                id="email"
                name="email"
                placeholder="email"
                type="email"
                value={formData.email}
                onChange={onChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password:
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
                id="password"
                name="password"
                placeholder="at least 6 characters long"
                type="password"
                value={formData.password}
                onChange={onChange}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div className="flex w-full justify-between items-center">
              <button
                onClick={onSubmit}
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {signType == 2 ? "Sign Up" : "Log In"}
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/resetpass"
              >
                Forgot Password?
              </a>
            </div>
            {signType == 1 ? (
              <div className="mt-7 flex w-full justify-center items-center text-sm font-thin">
                Don't have an account ?
                <div
                  onClick={onClickSignUp}
                  className="ml-2 border border-blue-500 px-1 rounded focus:outline-none focus:shadow-outline text-sm text-blue-500 hover:text-blue-800"
                >
                  Sign Up
                </div>
              </div>
            ) : (
              <div className="mt-7 flex w-full justify-center items-center text-sm font-thin">
                I have already an account.
                <div
                  onClick={handleSignIn}
                  className="ml-2 border border-blue-500 px-1 rounded focus:outline-none focus:shadow-outline text-sm text-blue-500 hover:text-blue-800"
                >
                  Log In
                </div>
              </div>
            )}
          </div>
        </DialogPanel>
      </div>
    </Dialog>

    <Dialog open={displayNotif} onClose={() => setDisplayNotif(false)}>
      <DialogBackdrop className="fixed inset-0 bg-black/20" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 bg-blue-500 px-10 py-7 rounded-lg text-white text-lg font-bold">
          <p>Your account is created.</p>
        </DialogPanel>
      </div>
      </Dialog>

      <Dialog open={showAuthError} onClose={() => setShowAuthError(false)}>
      <DialogBackdrop className="fixed inset-0 bg-black/20" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 bg-blue-500 px-10 py-7 rounded-lg text-white text-lg font-bold">
          <p>{autherror.message}</p>
        </DialogPanel>
      </div>
      </Dialog>
    </>

    
  );
};

export default LogForm;
