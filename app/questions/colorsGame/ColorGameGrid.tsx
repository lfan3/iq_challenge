import React, { useEffect, useState } from 'react';
import { ITriangleData, IQuestionContentProps } from "../declaration"
import colorPalettes from "@/app/utils/colors";
import { useGlobalKeyPress } from '@/app/utils/hooks';
import {getAnswerService} from "@/app/services";
import { useData } from '@/app/context/DataStateContext';
import {Info} from "@/app/components/Info";
import { isAlphbet } from "@/app/utils/helper";




const cellPalettes = ["orange", "green", "red", "purple", "#eaea16"]
// todo modify cellpalettes
const ColorGameGrid: React.FC = ({ data, type, color = "red", selectedQ, explosionTrigger, updateSelectedQ,setEnd,setIsWrong, correctionArr }) => {
    const [inputValue, setInputValue] = useState("");
    const {updateUserQuestion} = useData()
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        setInputValue("")
        const refillAnswer = async()=>{
            const response = await getAnswerService(selectedQ)
            let {answer, success} = response;
            if(isAlphbet(answer)){
              setInputValue(answer.toUpperCase())
            }else{
              setInputValue(answer)
            }
          }
      
          if(correctionArr.includes(String(selectedQ))){
            refillAnswer()
          }
    }, [selectedQ])

    const handleInputChange = (e) => {
        const { value } = e.target
        setInputValue(value)
    }

    const handleEnterPress = async () => {
        if (!inputValue) return;
        let {success, answer} = await getAnswerService(selectedQ)

        if(!success){
            setShowInfo(true)
        } else {
            if (answer == inputValue) {
                explosionTrigger(true)
                updateUserQuestion(selectedQ)
    
                const timer = setTimeout(() => {
                    setInputValue("")
                    clearTimeout(timer)
                }, 2200)
            } else {
                setIsWrong(true)
                const timer = setTimeout(() => {
                    setIsWrong(false)
                    clearTimeout(timer)
                }, 1000)
            }
        }
    }

    useGlobalKeyPress("Enter", handleEnterPress)

    return (
        <>
          <div className='w-full h-full flex flex-wrap justify-center content-center'>
            {
                data.map((d, i) => {
                    if (i < 5 || (i + 1) % 5 == 0) {
                        if (d == "?") {
                            return (
                                <div key={i} className={`${(i + 1) % 5 == 0 ? "w-[5%]" : "w-[16%]"}  inline-block m-2 flex justify-center items-center font-bold`} style={{ backgroundColor: 'white' }}>
                                    <input className={`w-10 h-10 p-1 grid_answer text-center text-${color} font-bold  border-${color} border-2 border-solid`} placeholder="?" value={inputValue} onChange={(e) => handleInputChange(e)} />
                                </div>
                            )
                        } else {
                            return (
                                <div key={i} className={`${(i + 1) % 5 == 0 ? "w-[5%]" : "w-[16%]"}  inline-block m-2 flex justify-center items-center font-bold`} style={{ backgroundColor: 'white' }}>
                                    {d}
                                </div>
                            )
                        }
                    }
                    else {
                        if (type == 2) {
                            return (
                                <div key={i} className='w-[16%] h-[16%] inline-block m-2 border border-black  divide-x divide-solid divide-black > * + *'>
                                    <div className={`w-1/2 h-full inline-block`} style={{ backgroundColor: cellPalettes[Math.floor(d / 10) - 1] }}></div>
                                    <div className={`w-1/2 h-full inline-block`} style={{ backgroundColor: cellPalettes[d % 10 - 1] }}></div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={i} className="w-[16%] h-[16%] inline-block m-2" style={{ backgroundColor: cellPalettes[d - 1] }}>
                                </div>
                            )
                        }
                    }
                })
            }
        </div>
        <Info message="something is wrong, try again" showInfo={showInfo} setShowInfo={setShowInfo}/>
        </>
      
    )
}

export default ColorGameGrid