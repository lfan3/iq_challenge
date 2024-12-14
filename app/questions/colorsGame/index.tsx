import { useState } from "react";
import ColorGameGrid from "./ColorGameGrid"
import colorPalettes from "@/app/utils/colors";


// const game1 = [13,14,18,24,"",1,2,3,4,"?",2,2,2,4,19,1,1,2,4,17,1,1,3,1,14]
// const game2 = [28,28,29,32,"",4,3,1,2,"?",4,4,4,4,32,1,4,1,1,26,1,2,2,2,33]
// const game3 = [35,28,34,34,"",54,12,51,41,"?",12,51,24,24,35,24,41,25,12,35,21,54,25,45,33]
// const game4 = [40,40,42,"?","", 21,53,32,51,40,15,12,23,35,40,23,51,23,12,42,35,23,52,13,""]
// const game5 = [94,98,75,"?","",31,12,52,35,88,22,35,32,55,128,52,53,11,21,91,33,52,13,12,""]

const ColorGame: React.FC = (props)=>{
    const {color, selectedQ} = props
    const [isWrong, setIsWrong] = useState(false);
    const renderGame = ()=>{
        switch(selectedQ){
            case 41:
                return <ColorGameGrid {...props} data ={props.data[0]} setIsWrong={setIsWrong} type={1}/>
            case 42:
                return <ColorGameGrid {...props} data={props.data[1]} setIsWrong={setIsWrong} type={1}/>
            case 43:
                return <ColorGameGrid {...props} data={props.data[2]} setIsWrong={setIsWrong} type={2}/>
            case 44:
                return <ColorGameGrid {...props} data={props.data[3]} setIsWrong={setIsWrong} type={2}/>
            case 45:
                return <ColorGameGrid {...props} data={props.data[4]} setIsWrong={setIsWrong} type={2}/>
            
        }
    }
    return (
        <div className={`w-[468px] w-4/12 h-[32rem] flex flex-col items-center rounded relative border border-4 border-${color}`}>
        {renderGame()}
        <div className={`absolute w-full h-full backdrop-blur-sm backdrop-grayscale ${isWrong ? 'block' : 'hidden'}`}>
                <p className={`absolute w-fit text-6xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                😭
                </p>
            </div>
        </div>
    )

}

export default ColorGame