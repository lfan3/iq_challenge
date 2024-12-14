export interface ITriangleData {
    first: (number | string)[];
    second: (number | string)[];
    third: (number | string)[];
}

export interface ICircleData {
    data1:(number | string)[];
    data2:(number | string)[];
    data3:(number | string)[];
}

  
export  interface IQuestionContentProps {
    data: ITriangleData | ICircleData | string[][] |(string | number | string[])[];
    type?:number,
    color: "string",
    selectedQ: number;
    questionTxt: string;
    explosionTrigger: (val: boolean) => void;
    updateSelectedQ: (q:number)=>void
    setIsWrong:(val: boolean) => void;
    // isWrongTrigger: (val: boolean) => void;
  }

export interface IQuestionProps {
    selectedQ: number;
    updateSelectedQ: (q:number)=>void;
    // children: (props:IQuestionContentProps)=>React.ReactNode
}
