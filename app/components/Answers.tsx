"use client"
import { getAnswerService,  } from '@/app/services';
import {showExplaination} from "@/app/api/calculate";
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Info } from './Info';

interface AnswersProps {
    selectedQ: number;
}
  
const Answers: React.FC<AnswersProps> = ({ selectedQ }): JSX.Element => {
    const [answer, setAnswer] = useState("? Thinking ...");
    const [showInfo, setShowInfo] = useState(false);

    useEffect(()=>{
       const getAnwer = async (selectedQ:number) => {
        try{
            const {key, answer} = await getAnswerService(selectedQ)
            setAnswer(answer)
        }catch(e){
            setShowInfo(true)
        }
       }
       getAnwer(selectedQ)
    },[selectedQ])

    const showAnswer = () => {
        if(answer =="? Thinking ..."){
            return answer
        }

        if (selectedQ < 21) {
            return answer
        } else if (selectedQ < 26) {
            const values = Object.values(JSON.parse(answer))
            return (
                <>
                    <p>{`${values[0]} ${values[1]} ${values[2]}`}</p>
                    <p>{`${values[3]} ${values[4]} ${values[5]}`}</p>
                    <p>{`${values[6]} ${values[7]} ${values[8]}`}</p>
                </>
            )
        }
        // i did not make between 26-30
        else if(selectedQ < 31){
            return (
                <div className="image_container">
                     <Image
                      src={`/${selectedQ}.png`}
                      width={500}
                      height={500}
                      alt="Picture of the author"
                    />
                    {/* <img className="w-10 h-10 rounded-full mr-4" src="/public/26.jpg" alt="Avatar of Jonathan Reinink"/> */}
                </div>
            )
        }
        else {
            return answer
        }
    }


    return (
        <div className="answer max-w-80">
            <div className='text-center uppercase'>
                {showAnswer()}
            </div>
            {
                !(+selectedQ < 31 && +selectedQ > 25) && (
                <div className="explaination text-left"><span className='font-bold p-2'>Explaination :</span> <p className='p-2'>{showExplaination(selectedQ)}</p></div>
                )
            }
        <Info message="something is wrong, try again" showInfo={showInfo} setShowInfo={setShowInfo}/>

        </div>

    )
}

export default Answers