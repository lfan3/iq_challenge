import React, { useEffect, useState } from 'react';
import colorPalettes from "@/app/utils/colors";
import { assortie } from '@/app/utils/colors';
import {ITriangleData, IQuestionContentProps} from "../declaration"
import styles from "./styles.module.css"
import { useGlobalKeyPress } from '@/app/utils/hooks';
import {getAnswerService} from "@/app/services";
import { isEqual, throttle, sortBy } from "lodash"
import { useData } from '@/app/context/DataStateContext';
import {Info} from "@/app/components/Info";
import { isAlphbet } from '@/app/utils/helper';



interface ITetraGame extends IQuestionContentProps {
    colors: string[];
    data: string[][];
}


interface ITetra {
    selectedQ:number;
    size: number;
    colors: string[];
    position:{[key:string]:string}
    letters:string[];
}

interface ITriangle {
    size:number,
    color:string
}

const Triangle = ({ size, color }:ITriangle) => {
    const y = size * Math.sin(Math.PI / 3)
    const x = size * Math.cos(Math.PI / 3)

    const height = size * Math.sin(Math.PI / 3);
    const centerX = size / 2; // 底边中点的x坐标
    const centerY = height / 3; // 三角形高度的1/3
    return (
        <polygon
            points={`0,${y} ${x},0 ${size},${y} `}
            fill={color}
        />
    );
}

const Tetrahedron: React.FC<ITetra> = ({ size, colors, selectedQ,letters }) => {
    const halfSize = size / 2;
    const lettersContent = letters.map(l => /[a-z]/.test(l) ? l.toLocaleUpperCase():l)
  

    return (
        <div className={styles.tetrahedron}>
        <div className={`relative flex justify-center`}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
                {/* 大的等边三角形 */}
                <Triangle size={size} color={colors[0]} />

                {/* 左下角的小三角形 */}
                <g transform={`translate(0, ${halfSize * Math.sin(Math.PI / 3)})`}>
                    <Triangle size={halfSize} color={colors[1]} />
                </g>

                {/* 右下角的小三角形 */}
                <g transform={`translate(${halfSize}, ${halfSize * Math.sin(Math.PI / 3)})`}>
                    <Triangle size={halfSize} color={colors[2]} />
                </g>

                {/* 顶点的小三角形 */}
                <g transform={`translate(${halfSize / 2}, 0) rotate(180, ${halfSize / 2}, ${halfSize * Math.sin(Math.PI / 3)})`}>
                    <Triangle size={halfSize} color={colors[3]} />
                </g>
            </svg>
            <span className='absolute font-bold text-xl text-white top-[20%] '>{lettersContent[0]}</span>
            <span className='absolute font-bold text-xl text-white top-[50%]'>{lettersContent[1]}</span>
            <span className='absolute font-bold text-xl text-white top-[60%] left-[20%]'>{lettersContent[2]}</span>
            <span className='absolute font-bold text-xl text-white top-[60%] right-[21%]'>{lettersContent[3]}</span>
        </div>
        </div>
    );
};

const TetraGame: React.FC<ITetraGame> = ({selectedQ, data, color, questionTxt, explosionTrigger, updateSelectedQ,correctionArr }) => {
    const [inputValue, setInputValue] = useState("");
    const [isWrong, setIsWrong] = useState<boolean>()
    const {updateUserQuestion} = useData()
    const [showInfo, setShowInfo] = useState(false);


    useEffect(()=>{
        setInputValue("")
        explosionTrigger(false)

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
    },[selectedQ])

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.target.value)
    }

    const handleEnterPress = async()=>{
        if(!inputValue) return;
        // let result=getAnswerService(selectedQ)
        let {success, answer} = await getAnswerService(selectedQ)

        if(!success){
            setShowInfo(true)
        }else{
            const val = inputValue.toUpperCase()
            let compare = false
            if(selectedQ == 39){
                const ra = answer.split("/");
                const va = val.split("/");
                if(isEqual(sortBy(ra), sortBy(va))){
                    compare = true
                }
            }else{
                compare = (val == answer)
            }
            
            if (compare) {
                explosionTrigger(true)
                updateUserQuestion(selectedQ)
    
                const timer = setTimeout(()=>{
                  updateSelectedQ(selectedQ+1)
                  setInputValue("")
                  clearTimeout(timer)
                }, 2200)
              } else {
                setIsWrong(true)
                const timer = setTimeout(()=>{
                  setIsWrong(false)
                  clearTimeout(timer)
                }, 1000)
              }
        }
    }

    useGlobalKeyPress("Enter", handleEnterPress)

    return (
        <div className={`w-[468px] w-4/12 h-[32rem] flex flex-col items-center rounded relative border border-4 border-${color}`}>
            <div className={styles.tetrahedron_container}>
            <p className={`${styles.triangle_text} absolute left-6 top-6`}>{questionTxt}</p>
            <Tetrahedron size={160} colors={assortie[color]} selectedQ={selectedQ} letters={data[0]} position={{top:"12",left:'2/3'}}/>
            <Tetrahedron size={160} colors={assortie[color]} selectedQ={selectedQ} letters={data[1]} position={{top:"1/2", left: '1/3'}} />
            <Tetrahedron size={160} colors={assortie[color]} selectedQ={selectedQ} letters={data[2]} position={{top:"96",right:"1/4"}} />
            <input className={`w-28 h-10 p-3 grid_answer text-center text-${color} font-bold absolute bottom-24 right-12 border-${color} border-2 border-solid`} placeholder="answer" value={inputValue} onChange={(e)=>handleInputChange(e)}/>
            {
                selectedQ == 39 && <p className='absolute bottom-36 right-6'>Seperate your answer with a Slash "/"</p>
            }
            <div className={`absolute absolute w-fit text-6xl top-2/4 left-3/4 ${isWrong ? 'block' : 'hidden'}`}>
                😭
            </div>
        </div>
        <Info message="something is wrong, try again" showInfo={showInfo} setShowInfo={setShowInfo}/>

        </div>
    )
}


export default TetraGame;