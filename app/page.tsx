"use client";
import React, { useRef, useState } from "react";
import Question from "./questions";
import { useData } from "./context/DataStateContext";
import QButton from "./components/QButton";
import AnswerButton from "./components/AnswerButton";
import { Info } from "./components/Info";


export default function Home() {
  // const [selectedQ, setSelectedQ] = useState<number>(1);
  const { selectedQ, updateSelectedQ, correct,saveAnswer, userId } = useData();
  const arr = Array.from({ length: 45 }, (_, index) => index + 1);
  const [showInfo, setShowInfo] = useState(false);

  // const updateSelectedQ = (q: number) => {
  //   setSelectedQ(q)
  // }

  const handleChooseQ = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    updateSelectedQ(id);
  };

  const onSaveButtonClick = async(event: React.MouseEvent<HTMLButtonElement>) => {
    // updateSelectedQ(id)
    const success = await saveAnswer();
    if(success){
      setShowInfo(true)
    }
  };

  const correctedArr = correct?.split(",").map((n) => n.trim()) || [];
  
  return (
    <div>
      <div className="flex justify-center  p-8 font-[family-name:var(--font-geist-sans)]">
        <div className="question_number flex flex-wrap w-[330px] justify-center h-[480px] mt-4">
          <p className="font-bold text-center text-base">
            Click{" "}
            <span className="border border-slate-400 px-2 py-1 shadow-md">
              Enter ↵
            </span>{" "}
            key to check your answer.
          </p>
          <div className="px-1 mt-3">
            {arr.map((num) => {
              return (
                <QButton
                  key={num}
                  id={num}
                  selectedQ={selectedQ}
                  onButtonClick={handleChooseQ}
                  displayEmoji={correctedArr.includes(String(num))}
                />
              );
            })}
          </div>
          <div className="w-full flex justify-between">
            <AnswerButton selectedQ={selectedQ} />
            {userId && selectedQ > 20 && selectedQ < 31 && (
              <button
                className={`mx-2 mt-4 font-bold shadow text-center border border-dashed  border-slate-400 px-2 py-2 rounded hover:shadow-2xl active:shadow-none active:transform active:scale-95 focus:shadow`}
                onClick={onSaveButtonClick}
              >
                SAVE ANSWER
              </button>
            )}
          </div>
        </div>
        <div className="ml-8">
          <Question
            selectedQ={selectedQ}
            updateSelectedQ={updateSelectedQ}
            correctionArr={correctedArr}
          />
        </div>
      <Info message="saved" showInfo={showInfo} setShowInfo={setShowInfo}/>
      </div>
    </div>
  );
}
