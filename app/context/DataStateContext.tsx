"use client";
import { createContext, useContext, useState, useEffect } from "react";
import {
  updateQuestionsInUserService
} from "@/app/services";
import { useAuth } from "./AuthContext";

const DataStateContext = createContext({});

export const DataStateProvider = ({children})=>{
    const [finish, setfinish] = useState(false);
    const { user } = useAuth();
    const [correct, setcorrect] = useState(user?.questions);

    useEffect(()=>{
        setcorrect(user?.questions)
    }, [user?.questions])


    const updateUserQuestion = async(questionId:string)=>{
        const {success,extra, correct} = await updateQuestionsInUserService({userId:user.userId, questionId})
        if(success){
            if(extra == "all"){
                setfinish(true)
            }
            setcorrect(correct)
        }
    }

    return (
       <DataStateContext.Provider value={{updateUserQuestion, finish, setfinish, correct}}>
        {children}
       </DataStateContext.Provider> 
    )
}

export const useData = ()=> useContext(DataStateContext);