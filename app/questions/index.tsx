"use client"
import Triangle from './triangle';
import Circle from './circle';
import Grid from './grid';
import Pyramid from './tetrahedron';
import ColorGame from './colorsGame';
import { useWindowSize } from "@uidotdev/usehooks";
import { Description, Dialog, DialogPanel, DialogTitle,DialogBackdrop } from '@headlessui/react'

import { useState } from 'react';
import Confetti from 'react-confetti'
import {IQuestionProps,IQuestionContentProps} from "./declaration"
import {triangleQData,pieData,gridData,tetraData,colorgames } from '@/app/api/questionsData'
import { useData } from '@/app/context/DataStateContext';

import colorPalettes from "@/app/utils/colors"


const questionTxts = [
    "It is a very easy question, I believe that you can get it.",
    "This one is harder than 1er one, but you can find it out.",
    "It is different than the previous two, but the math formula is simple.",
    "The equation is still quite simple, but you have to think more to realize how we complicate the problem.",
    "The numbers become letters, can you handle it?",
    "Now it is easy for you, try another one.",
    "No matter letters or number, have you figured everything out?",
    "It is easy to get the meaning of letters, but the calculation is intricate.",
    "You might want to think of the name of a great literary figure",
    "You can get it this time.",
    "It is quite easy. You get it in 2 seconds.",
    "We play a little trick.",
    "Can you get the answer?",
    "You need to find a different logical reasioning.",
    "A primary school student knows the equation.",
    "It is simple calculation, don't let the numbers deceive you.",
    "Another simple question.",
    "Examine the logical connections between the letters.",
    "Observe the relationship between the letter and numbers.",
    "I believe that you're now adept at this type of logic.",
    "","","","","",
    "TRANSCRIBE, PLAUSIBLE, ABRIDGED, GOLEM, SEDITION, CONVEX, SUBLIME, DEPLETE, CONVULSE, VOCAL, GLOAT, TAGETES, STRATEGIC, JEJUNE, PLINTH",
    // "REBARBATIVE, LAYETTE, DYSTAXIA, FLUVIAL, EXHUME, POSTVOCALIO, PIPSTRELLE, RONIN, DELPHINIUM, SERIATE, PIQUE, MUTATE, BUSUUTI, SEPTUM, DYSGENIC",
   "MUSCULAR, FAUBOURG, DROSOPHILA, GOOGOL, PENITENT, INSPISSATE, OSTRACIZE, POSTERN, MOPOKE, PAEDOLOGY, CONCRETION, HIBERNAL, HELIX, IMBROGLIO, HELIUM, GYVE",
    "UMBRA, UCARITIC, UNHORSE, UNTIMELY, UNANELED, UNWIND, UNARY, ULEMA, UPHILL, UPHEAVAL, ULTRARED, UNCINATE, UPHOLSTER",
    "SHINTO, SHOGUN, SHRUBBERY, SHROVE, SHILLELAGH, SHOSHONE, SHULAMITE, SHROUD, SHEKEL, SHOTGUN, SHRINKAGE, SHUSH, SHOSTAKOVICH, SHROVETIDE, SHUTTLE",
    "ULEMA, PROPONENT, INTERGLACIAL, INFULAE, SLAVONIC, PROPORTIONAL, FLAMINGO, INHERIT, SLALOM, INTONATION, LANGUOR, INFUSION, SLEAZEBALL, INTESTATE, LANTERN",
    "This is simple !",
    "There are multiple ways to solve it.",
    "Here is different than previous.",
    "Now you can get it with ease.",
    "what is the answer here?",
    "Do these appear familiar to you ?",
    "Some basic math.",
    "Observe carefully.",
    "Simple Math again.",
    "It is difficulte. An old numeral system.",
]
// todo render props
export default function Question({ selectedQ,updateSelectedQ,correctionArr}: IQuestionProps) {
    const { width = 500, height = 120 } = useWindowSize()
    const [explosion, setExplosion] = useState(false)
    const {finish,setfinish} = useData()


    const explosionTrigger = (val: boolean) => {
        setExplosion(val)
    }


    const handleCompletion = () => {
        explosionTrigger(false)
    }

    const getQuestion = () => {
        // tod 10 triangle questions
        const qt = questionTxts[selectedQ - 1]
        const time = Math.floor((selectedQ-1) / 10)
        const pos = selectedQ - time * 10 - 1
        const color = colorPalettes[pos]
        if (selectedQ < 11){
            return <Triangle data={triangleQData[+selectedQ-1]} selectedQ={selectedQ} questionTxt={qt} explosionTrigger={explosionTrigger} updateSelectedQ={updateSelectedQ} color={color} correctionArr={correctionArr}/>
        }else if(selectedQ < 21){
            return <Circle type={1} data={pieData[+selectedQ%11]} selectedQ={selectedQ} questionTxt={qt} explosionTrigger={explosionTrigger} updateSelectedQ={updateSelectedQ} color={color} correctionArr={correctionArr}/>
        }else if(selectedQ < 26){
            return <Grid type={1} data={gridData[+selectedQ%21]} selectedQ={selectedQ} questionTxt={qt} explosionTrigger={explosionTrigger} updateSelectedQ={updateSelectedQ} color={color} correctionArr={correctionArr}/>
        } else if(selectedQ < 31){
            return <Grid type={2} data={gridData[+selectedQ%21]} selectedQ={selectedQ} questionTxt={qt} explosionTrigger={explosionTrigger} updateSelectedQ={updateSelectedQ} color={color} correctionArr={correctionArr}/>
        }
        else if(selectedQ < 41){
           return( <Pyramid
            colors={['#26547c', '#ef476f', '#ffd166']} // 每个面的颜色
            data={tetraData[+selectedQ%30 - 1]} 
            selectedQ={selectedQ} questionTxt={qt} explosionTrigger={explosionTrigger} updateSelectedQ={updateSelectedQ}
            color={color} correctionArr={correctionArr}
          />)
        }else if(selectedQ<46){
            return (
                <ColorGame 
                    selectedQ={selectedQ} 
                    color={color} correctionArr={correctionArr} data={colorgames} explosionTrigger={explosionTrigger} updateSelectedQ={updateSelectedQ}
                />
            )
        }
    }
    return (
        <>
            <Dialog open={finish} onClose={() => setfinish(false)} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-black/30" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel className="max-w-lg space-y-4 border bg-white px-10 py-7 rounded-lg">
                <Description className="flex items-baseline text-xl font-semibold text-gray-900">
                    <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    ✌️
                    </div>
                    <p className='mx-2'>
                    Congratulations! 
                    </p>
                </Description>
                <p>You have successfully completed the game.</p>
                <div className="flex justify-end">
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setfinish(false)}>CLOSE</button>
                </div>
              </DialogPanel>
            </div>
            </Dialog>
            {getQuestion()}
            <div>
                {
                    explosion && (
                        <Confetti width={width * 2} height={height} run={explosion} numberOfPieces={1000} recycle={false} initialVelocityY={25} initialVelocityX={30} confettiSource={{ x: width, y: height }} gravity={0.1} onConfettiComplete={handleCompletion} />
                    )
                }
            </div>
        </>
    )
}
