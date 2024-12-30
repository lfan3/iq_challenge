import styles from "./styles.module.css";
import { IQuestionContentProps } from "../declaration";
import React, {
  useEffect,
  useRef,
  useState,
  MouseEvent,
  KeyboardEvent,
  ChangeEvent,
} from "react";
// import { getGridFullAnswerService,getGridParticalAnswerService  } from "@/app/services";
import { isEqual, throttle, sortBy } from "lodash";
import { useGlobalKeyPress } from "@/app/utils/hooks";
import { useData } from "@/app/context/DataStateContext";
import { Info } from "@/app/components/Info";
import { isAlphbet } from "@/app/utils/helper";

// style={{ borderColor: colorPalettes[+selectedQ % 10] }}
// type 1: normal
// type 2: game for find words
// type 3: ⭕=0 ✔️=1 ❤️ =2 💲=3 -- finally did not use
// difficulty: handle mousedrag and click.

const symboles = ["⭕", "✔️", "❤️", "💲"];

const GridGame: React.FC<IQuestionContentProps> = (gridProps) => {
  const {
    selectedQ,
    data,
    type,
    color,
    explosionTrigger,
    updateSelectedQ,
    setIsWrong,
    questionTxt,
    correctionArr,
  } = gridProps;
  // const [inputsValue, setInputsValue] = useState<{ [key: number]: string }>({})
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartTime, setDragStartTime] = useState<number | null>();
  // const [gridSelectedCellId, setselectedCellId] = useState(new Set([]));
  const {
    updateUserQuestion,
    updateContent: setInputsValue,
    content: inputsValue ,
    getGridAnswer,
    gridSelectedCellId,
    updateGridSelectedCellId: setselectedCellId
  } = useData();
  const [showInfo, setShowInfo] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const getCellInfo = (target): [number, number] => {
    const row = parseInt(target.getAttribute("data-row") || "-1");
    const col = parseInt(target.getAttribute("data-col") || "-1");
    return [row, col];
  };

  const refilledGame = (data) => {

    if (!Object.keys(data).length) return;
    if (type == 1) {
      let inputsValue = {};
      Object.entries(JSON.parse(data)).forEach(([key, val]) => {
        if (isAlphbet(val)) {
          inputsValue[key] = val.toUpperCase();
        } else {
          inputsValue[key] = val;
        }
      }, inputsValue);
      setInputsValue(inputsValue);
    } else {
      const celles = data.split(",")
      setselectedCellId(new Set(celles));
    }
  };

 

  useEffect(() => {
    explosionTrigger(false);
    setselectedCellId(new Set());
    // const refillAnswer  = async(isCompleted:boolean)=>{
    //   let response;
    //   if(isCompleted){
    //     response = await getGridFullAnswerService(selectedQ)
    //   }else{
    //     // response = await getPartialAnswerService(selectedQ)
    //   }
    //   let {answer, success} = response;
    //   let obj = JSON.parse(answer)

    // }
    // refill the grid with fullanswer, partial record or nothing

    const drawGrid = async () => {
      try {
        const {answer, success} = await getGridAnswer(correctionArr.includes(String(selectedQ)))
        if(answer){
          refilledGame(answer);
        }
      }catch(e){
        console.log("drawGrid is wrong ", e);
      }
    };

    drawGrid()

  }, [selectedQ]);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
      if (gridRef.current && gridRef.current.contains(event.target as Node)) {
        setIsDragging(true);
        setDragStartTime(Date.now());
      }
    };
    document.addEventListener(
      "mousedown",
      handleMouseDown as unknown as EventListener
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleMouseDown as unknown as EventListener
      );
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
      if (
        isDragging &&
        gridRef.current &&
        gridRef.current.contains(event.target as Node)
      ) {
        const dragMoveTime = Date.now();
        const timeDiff = dragMoveTime - (dragStartTime || 0);
        if (timeDiff > 200) {
          const [x, y] = getCellInfo(event.target);
          setselectedCellId((prevSet) => {
            const newSet = new Set([...prevSet, `${x * 100}${y}`]);
            return newSet;
          });
        }
      }
    };

    const handleMouseUp = (event: MouseEvent<HTMLDivElement>) => {
      if (isDragging && dragStartTime) {
        const dragEndTime = Date.now();
        const timeDiff = dragEndTime - (dragStartTime || 0);
        const [x, y] = getCellInfo(event.target);
        if (timeDiff < 200) {
          handleGridCellClick(event, x, y);
        }
        setIsDragging(false);
        setDragStartTime(null);
      }
    };
    document.addEventListener(
      "mousemove",
      handleMouseMove as unknown as EventListener
    );
    document.addEventListener(
      "mouseup",
      handleMouseUp as unknown as EventListener
    );

    return () => {
      document.removeEventListener(
        "mousemove",
        handleMouseMove as unknown as EventListener
      );
      document.removeEventListener(
        "mouseup",
        handleMouseUp as unknown as EventListener
      );
    };
  }, [isDragging]);

  const handleEnterPress = async (event: KeyboardEvent) => {
    const isFullAnswer = true;
    let { success, answer } = await getGridAnswer(isFullAnswer);
    if (!success) {
      setShowInfo(true);
    } else {
      if (type == 1) {
        const caseInsensibleInputsValue: { [key: number]: string } = {};

        Object.entries(inputsValue).forEach(
          ([key, value]) =>
            (caseInsensibleInputsValue[key] = value.toLowerCase())
        );
        if (isEqual(caseInsensibleInputsValue, JSON.parse(answer))) {
          explosionTrigger(true);
          updateUserQuestion();

          const timer = setTimeout(() => {
            updateSelectedQ(selectedQ + 1);
            setInputsValue({});
            clearTimeout(timer);
          }, 2200);
        } else {
          setIsWrong(true);
          const timer = setTimeout(() => {
            setIsWrong(false);
            clearTimeout(timer);
          }, 1200);
        }
      } else if (type == 2) {
        const selectedIdArr = Array.from(gridSelectedCellId);
        const selectedIdArrFromAnswer = Array.from(JSON.parse(answer))
        const compare = isEqual(sortBy(selectedIdArr), sortBy(selectedIdArrFromAnswer));
        if (compare) {
          explosionTrigger(true);
          const timer = setTimeout(() => {
            updateSelectedQ(selectedQ + 1);
            setInputsValue({});
            clearTimeout(timer);
          }, 1200);
        } else {
          setIsWrong(true);
          const timer = setTimeout(() => {
            setIsWrong(false);
            clearTimeout(timer);
          }, 2000);
        }
      }
    }
  };

  useGlobalKeyPress("Enter", handleEnterPress);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const { value } = e.target;
    let gridType1Value = {}
    // see wether inputsValue is inital value
    if(typeof inputsValue == "string"){
      gridType1Value = {}
    }else{
      gridType1Value = inputsValue
    }
    gridType1Value[id] = value;
    setInputsValue({ ...gridType1Value, [id]: value });
  };

  const handleGridCellClick = (e: MouseEvent, row: number, col: number) => {
    if (!(type === 2)) return;

    const target = e.target as HTMLDivElement;
    if (target.classList.contains("selected-q")) {
      setselectedCellId((prevSet) => {
        const newSet = new Set(prevSet);
        newSet.delete(`${row * 100}${col}`);
        return newSet;
      });
      // target.classList.remove(`bg-${color}`, 'selected-q')
    } else {
      // target.classList.add(`selected-q`,`bg-${color}`)
      setselectedCellId((prevSet) => {
        const newSet = new Set([...prevSet, `${row * 100}${col}`]);
        return newSet;
      });
    }
  };

  const renderContent = (letter: number | string, id: number) => {
    if (letter == "" || letter == "?") {
      return (
        <input
          className={`w-full h-full grid_answer border-0 outline-0 text-center text-${color}`}
          value={inputsValue[id] || ""}
          onChange={(e) => handleInputChange(e, id)}
        />
      );
    } else if (type == 1 || type == 2) {
      return typeof letter == "string" ? letter.toUpperCase() : letter;
    } else {
      return symboles[letter as number];
    }
  };

  return (
    <>
      <div className="flex flex-col items-center rounded relative">
        <p
          className={`p-1 text-center ${
            selectedQ > 25 ? `-mt-8 text-slate-500` : "-mt-2 p-3"
          }`}
        >
          {questionTxt}
        </p>

        <div
          className={`${styles.grid_container} ${styles.grid_15} border-${color}`}
          ref={gridRef}
        >
          {data.map((nums, row) => {
            return nums.map((letter, col) => {
              const id = 10 * row + col;
              return (
                <div
                  key={id}
                  className={`${
                    styles.grid_cell
                  } border-${color} rgb(245 245 245) ${
                    gridSelectedCellId.has(`${row * 100}${col}`)
                      ? `bg-${color} selected-q`
                      : ""
                  }`}
                  data-row={row}
                  data-col={col}
                >
                  {renderContent(letter, row * 10 + col)}
                </div>
              );
            });
          })}
        </div>
        {/* <button 
        className={`bg-${color} px-5 py-2 mt-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg hover:bg-${color}-600 focus:outline-none focus:ring focus:ring-${color}-300 focus:ring-opacity-80`}
        onClick={onSubmitAnswer}
      >
      Submit
    </button> */}
      </div>
      <Info
        message="something is wrong, try again"
        showInfo={showInfo}
        setShowInfo={setShowInfo}
      />
    </>
  );
};

const Grid: React.FC<IQuestionContentProps> = (gridProps) => {
  const { questionTxt, selectedQ, color, type } = gridProps;
  const [isWrong, setIsWrong] = useState<boolean>();

  return (
    <div className="w-[468px] w-4/12 h-[30rem] flex flex-col items-center rounded relative">
      {/* <p className={`p-1 text-center ${selectedQ > 25 ? `-mt-8 text-slate-500` : '-mt-2 p-3'}`}>{questionTxt}</p> */}
      <GridGame
        {...gridProps}
        setIsWrong={setIsWrong}
        questionTxt={questionTxt}
      />
      <div
        className={`absolute w-full h-full ${
          type == 2 && "mt-10"
        } backdrop-blur-sm backdrop-grayscale ${isWrong ? "block" : "hidden"}`}
      >
        <p
          className={`absolute w-fit text-6xl top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2 `}
        >
          😭
        </p>
      </div>
    </div>
  );
};

export default Grid;
