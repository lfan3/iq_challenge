"use client";
import React from "react";
import colorPalettes from "@/app/utils/colors";

interface QButtonProps {
  id: number;
  selectedQ: number;
  onButtonClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    num: number
  ) => void;
  displayEmoji: boolean;
}

const QButton: React.FC<QButtonProps> = ({
  id,
  selectedQ,
  onButtonClick,
  displayEmoji,
}) => {
  const time = Math.floor((id - 1) / 10);
  const pos = id - time * 10 - 1;
  const color = colorPalettes[pos];

  return (
    <button
      key={id}
      className={`min-w-8 w-14 h-8 m-1 mt-2 border-2 text-center  rounded hover:shadow-xl active:bg-${color}} ${
        id === selectedQ ? `bg-${color} border-${color}` : ""
      }`}
      onClick={(e) => onButtonClick(e, id)}
      style={{
        // 'backgroundColor': id === selectedQ ? colorPalettes[id % 10] : "", // 动态设置焦点颜色
        // "borderColor": id === selectedQ ? color : "",
        color: id === selectedQ ? "#fdfffc" : "",
      }}
    >
      {id}
      {displayEmoji && <span className="ml-2"> 🎉</span>}
    </button>
  );
};

export default QButton;
