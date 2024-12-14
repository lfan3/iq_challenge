"use client"
import React, { useState } from "react";
import Question from "./questions"
import colorPalettes from "./utils/colors"
import { Description, Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react'
import Answers from "./questions/answers";
import { useData } from "./context/DataStateContext";

interface QButtonProps {
  id: number,
  selectedQ: number,
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>, num: number) => void
}

const QButton: React.FC<QButtonProps> = ({ id, selectedQ, onButtonClick,displayEmoji }) => {
  const time = Math.floor((id - 1) / 10)
  const pos = id - time * 10 - 1
  const color = colorPalettes[pos]


  return (
    <button
      key={id}
      className={`min-w-8 w-14 h-8 m-1 mt-2 border-2 text-center  rounded hover:shadow-xl active:bg-${color}} ${id === selectedQ ? `bg-${color} border-${color}` : ""}`}
      onClick={(e) => onButtonClick(e, id)}
      style={{
        // 'backgroundColor': id === selectedQ ? colorPalettes[id % 10] : "", // 动态设置焦点颜色
        // "borderColor": id === selectedQ ? color : "",
        "color": id === selectedQ ? "#fdfffc" : "",
      }}
    >
      {id}
      {displayEmoji && <span className="ml-2"> 🎉</span> }
    </button>
  )
}

const AnswerButton:React.FC<{[key:string]:number}>= ({selectedQ})=>{
  const [open, setopen] = useState(false);
  const time = Math.floor((selectedQ-1) / 10)
  const pos = selectedQ - time * 10 - 1
  const color = colorPalettes[pos]
  
  const onAnswerButtonClick = ()=>{
    setopen(true)
  }

  return (
    <div className="anserButton">
      <button
        className={`mx-2 mt-4 font-bold shadow text-center border border-dashed  border-slate-400 px-2 py-2 rounded hover:shadow-2xl`}
        onClick={(e) => onAnswerButtonClick()}
      >
        SHOW THE ANSWER
      </button>
      <Dialog
        open={open}
        onClose={() => setopen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white px-10 py-7 rounded-lg">
            <Description className="flex items-baseline text-xl font-semibold text-gray-900">
              <p className="mx-2">Answer:</p>
            </Description>
            <Answers selectedQ={selectedQ} />
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setopen(false)}
              >
                CLOSE
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}

export default function Home() {
  const [selectedQ, setSelectedQ] = useState<number>(1);
  const {correct=""} = useData()

  const arr = Array.from({ length: 45 }, (_, index) => index + 1)

  const updateSelectedQ = (q: number) => {
    setSelectedQ(q)
  }

  const handleChooseQ = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    setSelectedQ(id)
  }
  const correctedArr = correct?.split(",").map(n => n.trim()) || []
  return (
    <div>
      <div className="flex justify-center  p-8 font-[family-name:var(--font-geist-sans)]">
        <div className="question_number flex flex-wrap w-[330px] justify-center h-[480px] mt-4">
          <p className="font-bold text-center text-base">Click <span className="border border-slate-400 px-2 py-1 shadow-md" >Enter ↵</span> key to check your answer.</p>
          <div className="px-1 mt-3">
            {arr.map((num) => {
              return (
                <QButton key={num} id={num} selectedQ={selectedQ} onButtonClick={handleChooseQ} displayEmoji={correctedArr.includes(String(num))}/>
              )
            })}
          </div>
          <div className="w-full">
          <AnswerButton selectedQ={selectedQ}/>
          </div>
        </div>
        <div className="ml-8">
          <Question selectedQ={selectedQ} updateSelectedQ={updateSelectedQ} correctionArr={correctedArr}/>
        </div>
      </div>
    </div>
  );
}
