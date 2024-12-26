"use client";
import { createContext, useContext, useState, useEffect } from "react";
import {
  updateQuestionsInUserService,
  updateAnswerService,
  getAnswerService,
  getGridParticalAnswerService 
} from "@/app/services";
import { useAuth } from "./AuthContext";

interface IAnswer {
    answer:any;
    success: boolean
}

interface QState {
  selectedQ: number;
  content: string | number | {};
  gridSelectedCellId: Set<string>;
  updateUserQuestion: () => Promise<void>;
  saveAnswer: () => Promise<void>;
  getGridAnswer:(isCompleted:boolean) => Promise<IAnswer>;
  updateContent: (content: any) => void;
  updateSelectedQ: (q: number) => void;
  updateFinish: (b: boolean) => void;
  finish: boolean;
  correct: string;
}

const DataStateContext = createContext<QState>({
  selectedQ: 1,
  content: "",
  gridSelectedCellId: new Set([]),
  updateUserQuestion: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 模拟异步操作
  },
  saveAnswer: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 模拟异步操作
  },
  getGridAnswer: async (isCompleted) => {
    // 模拟异步操作
    return await new Promise((resolve) => setTimeout(resolve, 1000));
  },
  updateContent: (c) => {},
  updateSelectedQ: (q) => {},
  updateFinish: (b) => {},
  finish: false,
  correct: "",
});

export const DataStateProvider = ({ children }) => {
  const { user } = useAuth();
  const [finish, setfinish] = useState(false);
  const [correct, setcorrect] = useState(user?.questions);
  const [selectedQ, setSelectedQ] = useState(1);
  const [content, setContent] = useState("");
  const [gridSelectedCellId, setGridSelectedCellId] = useState(new Set([]));

  useEffect(() => {
    setcorrect(user?.questions);
  }, [user?.questions]);

  const updateContent = (content) => {
    // setSelectedQ(q)
    setContent(content);
  };

  const updateSelectedQ = (q: number) => {
    setSelectedQ(q);
  };

  const updateGridSelectedCellId = (data) => {
    setGridSelectedCellId(data)
  }

  const updateUserQuestion = async () => {
    const { success, extra, correct } = await updateQuestionsInUserService({
      userId: user.userId,
      questionId: selectedQ
    });
    if (success) {
      if (extra == "all") {
        setfinish(true);
      }
      setcorrect(correct);
    }
  };

  const updateFinish = (f: boolean) => {
    setfinish(f);
  };

//   @gridType: 1 or 2, 1 for q 21-25, 2 for 26 to 30
  const saveAnswer = async () => {
    let data = content;
    if(selectedQ > 25 && selectedQ < 31){
        data = Array.from(gridSelectedCellId).join(",")
    }
    try{
        const { success } = await updateAnswerService({
            content:data,
            userId: +user.userId,
            questionId: +selectedQ,
        });
        return success
    }catch(e){
        return false
    }

  };

//   todo handle success faild
  const getGridAnswer = async (isCompleted: boolean) => {
    // send questionid and userid
    const getGridFulleAnswer = async () => {
      const response = await getAnswerService(selectedQ);
    //   let { answer, success } = response;
      return response;
    };

    const getGridParticalAnswer = async () => {
      const response = await getGridParticalAnswerService({userId:+user.userId, questionId: +selectedQ});
    //   let { answer, success } = response;
      return response;
    };

    if (isCompleted) {
        return getGridFulleAnswer()
    } else {
        return getGridParticalAnswer()
    }
  };

  return (
    <DataStateContext.Provider
      value={{
        updateUserQuestion,
        updateContent,
        updateSelectedQ,
        updateFinish,
        saveAnswer,
        getGridAnswer,
        finish,
        correct,
        selectedQ,
        content,
        gridSelectedCellId,
        updateGridSelectedCellId,
      }}
    >
      {children}
    </DataStateContext.Provider>
  );
};

export const useData = () => useContext(DataStateContext);
