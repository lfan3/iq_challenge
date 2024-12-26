"use client";
import React, { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogBackdrop,
} from "@headlessui/react";
import Answers from "./Answers";

const AnswerButton: React.FC<{ [key: string]: number }> = ({ selectedQ }) => {
  const [open, setopen] = useState(false);
  const time = Math.floor((selectedQ - 1) / 10);

  const onAnswerButtonClick = () => {
    setopen(true);
  };

  return (
    <div className="anserButton">
      <button
        className={`mx-2 mt-4 font-bold shadow text-center border border-dashed  border-slate-400 px-2 py-2 rounded hover:shadow-2xl`}
        onClick={(e) => onAnswerButtonClick()}
      >
        SHOW ANSWER
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
};

export default AnswerButton;
