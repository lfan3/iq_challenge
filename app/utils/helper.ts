import { ICircleData } from "../questions/declaration";

function isICircle(obj:any): obj is ICircleData{
    return (
        typeof obj === 'object' &&
        'data1' in obj && "data2" in obj && "data3" in obj
      );
}

function isAlphbet(str):boolean{
    const alphabetRege = /^[a-zA-Z]+$/;
    return alphabetRege.test(str)
}

export {
    isICircle,
    isAlphbet
}