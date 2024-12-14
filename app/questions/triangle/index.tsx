"use client"
import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import {getAnswerService} from "@/app/services";
import {ITriangleData, IQuestionContentProps} from "../declaration"
import { useData } from '@/app/context/DataStateContext';
import {Info} from "@/app/components/Info";
import { isAlphbet } from '@/app/utils/helper';

// todo: 连续两次输入会有问题
// todo: 玻璃碎片


export default function Triangle({ data, selectedQ, questionTxt, color, explosionTrigger, updateSelectedQ, correctionArr}: IQuestionContentProps) {
  const [isWrong, setIsWrong] = useState<boolean>();
  const [inputValue, setInputValue] = useState("");
  const {updateUserQuestion} = useData()
  const [showInfo, setShowInfo] = useState(false);

  useEffect(()=>{
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
  },[selectedQ, correctionArr.length])

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputValue(e.target.value)
  }

  const handleEnter = async (event: React.KeyboardEvent<HTMLInputElement>, selectedQ:number) => {
    if (event.key == "Enter") {
      let { value } = event.target

      if(isAlphbet(value)){
        value = value.toLocaleLowerCase()
      }
      // let result=getAnswerService(selectedQ)
      const response = await getAnswerService(+selectedQ)
      let {answer, success} = response;

      // todo an api call
      if(!success){
        setShowInfo(true)
      } else {
        if (value == answer) {
          explosionTrigger(true)
          // await storeAnswerService({{userId:string, questionId:selectedQ, answer:value}})
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
          }, 2500)
        }
      }

    }
  }

  const { first, second, third } = data

  return (
    <div className={`w-[468px] w-4/12 h-[32rem] flex flex-col rounded relative bg-${color}`}>
      {/* colorPalettes[+selectedQ % 10] */}
      <p className='p-6 text-white text-center'>{questionTxt}</p>

      <div className='mt-3'>
        <div className='relative'>
          <div className={`${styles.triangle_up} ${styles.triangle_first}`}></div>
          <div className='absolute text-white -top-6 left-[228px]'>{first[0]}</div>
          {
            first[1] == "?"
              ? (
                <input
                  className='absolute text-black text-center top-1/2 left-[210px] w-12 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  placeholder={String(first[1])}
                  onKeyDown={(e)=>handleEnter(e, selectedQ)}
                  value={inputValue}

                />)
              : <div className='absolute text-black text-center top-1/2 w-[88px] left-[190px]'>{first[1]}</div>
          }
          {
            first[2] == "?"
              ? (
                <input
                  className='absolute text-black text-center -bottom-8 left-[146px] w-12 border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  placeholder={String(first[2])}
                  onKeyDown={(e)=>handleEnter(e, selectedQ)}
                  value={inputValue}

                />)
              : <div className='absolute text-white -bottom-6 left-[158px]'>{first[2]}</div>
          }
          <div className='absolute text-white -bottom-6 right-[158px]'>{first[3]}</div>
        </div>
        <div className='relative'>
          <div className={`${styles.triangle_up} ${styles.triangle_second}`}></div>
          {
            second[0] == "?"
              ? (
                <input
                  className='absolute text-black text-center -top-8  left-[120px] w-12 border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  placeholder={String(second[0])}
                  onKeyDown={(e)=>handleEnter(e, selectedQ)}
                  value={inputValue}

                />)
              : <div className='absolute text-white -top-6  left-[142px]'>{second[0]}</div>
          }
          <div className='absolute text-black top-1/2 left-[138px]'>{second[1]}</div>
          <div className='absolute text-white -bottom-6 left-[70px]'>{second[2]}</div>
          <div className='absolute text-white -bottom-6 left-[210px]'>{second[3]}</div>
        </div>
        <div className='relative'>
          <div className={`${styles.triangle_up} ${styles.triangle_third}`}></div>
          <div className='absolute text-white -top-6  right-[138px]'>{third[0]}</div>
          {
            third[1] == "?"
              ? (
                <>
                  <input
                    className='absolute text-black text-center top-1/2 right-[118px] w-12 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder={String(third[1])}
                    onKeyDown={(e)=>handleEnter(e, selectedQ)}
                    value={inputValue}
                    onChange={handleChange}
                  />
                </>
              )
              : <div className='absolute text-black top-1/2 right-[134px]'>{third[1]}</div>
          }
          <div className='absolute text-white -bottom-6  right-[206px]'>{third[2]}</div>
          <div className='absolute text-white -bottom-6 right-[68px]'>{third[3]}</div>
        </div>
      </div>
      {/*todo:add anime? origin-center  animate-rotate-and-fade  */}
      <div className={`text-6xl absolute top-1/2 left-1/2 -translate-x-2/4 ${isWrong ? 'block' : 'hidden'}`}>
      😭
      </div>
      <Info message="something is wrong, try again" showInfo={showInfo} setShowInfo={setShowInfo}/>

    </div>
  );
}

  // confettiSource={{x:500, y:2000}}