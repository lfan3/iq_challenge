import { useEffect, KeyboardEvent } from "react"


const useGlobalKeyPress = (key:string, callback:(event:KeyboardEvent)=>void)=>{
   useEffect(()=>{
    const handleKeyPress = (event:KeyboardEvent)=>{
        if(event.key == key){
            callback(event)
        }
    }

    document.addEventListener("keydown",handleKeyPress as unknown as EventListener)
    return ()=>{
        document.removeEventListener("keydown", handleKeyPress as unknown as EventListener)
    }
   })
}




export {useGlobalKeyPress}