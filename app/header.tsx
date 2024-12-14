"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import LogForm from "@/app/components/LogForm";
import { useAuth } from "@/app/context/AuthContext";

export default function Header() {
  const [open, setopen] = useState(false);
  const { user, login, logout } = useAuth();

 
  const onLogClick = async (e) => {
    const isLogin = e.target.textContent.toLowerCase() != "log out"
    if(isLogin){
      setopen(!open);
    }else{
      logout()
    }
  };
  return (
    <>
      <nav className="flex items-center justify-between p-6 lg:px-8 shadow-sm">
        <h1 className="font-bold tracking-tight text-3xl w-12 ml-16">
          IQ Challenge
        </h1>
        <div className="header_right flex">
          <Image
            src="/profit.png"
            width={50}
            height={50}
            alt="Profit image"
            className="rounded-full border"
          />
          <p className="py-3 ml-2 font-bold">{user?.username || "" }</p>
          <button
            className={`mx-2 font-bold border-l  border-slate-600  text-center  px-2  hover:shadow-sm`}
            onClick={(e) => onLogClick(e)}
          >
            {user ? "Log out" : "Sign In to keep your record"}
          </button>
        </div>
      </nav>
      <LogForm open={open} setopen={setopen} />
   
    </>
  );
}
