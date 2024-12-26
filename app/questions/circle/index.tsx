"use client"

import { IQuestionContentProps } from "../declaration";
import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
// import {getAnswerService} from "@/app/services";
import {getAnswerService} from "@/app/services";
import { isAlphbet, isICircle } from "@/app/utils/helper";
import { useData } from '@/app/context/DataStateContext';
import {Info} from "@/app/components/Info";

// components/PieChart.tsx

const COLORS = ["#ff8700", "#1a7431", "#00b2ca", "#be0aff", "#0aefff", "#147df5", "#ff0000", "#580aff",];


const Pie: React.FC<IQuestionContentProps> = ({ data, selectedQ, questionTxt, explosionTrigger, updateSelectedQ, type, setIsWrong,correctionArr}) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [inputValue, setInputValue] = useState("");
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

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.target.value)
    }

    const handleEnter = async(event: React.KeyboardEvent<HTMLInputElement>, selectedQ:number) => {
        if (event.key == "Enter") {
          let { value } = event.target
    
          if(isAlphbet(value)){
            value = value.toUpperCase()
          }
        //   let result=getAnswerService(selectedQ)
          const response = await getAnswerService(+selectedQ)
          let {answer, success} = response;
          // todo an api call
          if(!success){
            setShowInfo(true)
          }else{
            if (value == answer) {
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
                }, 800)
              }
          }
 
        }
    }

    useEffect(() => {
        if (!svgRef.current) return;
        setInputValue("")
        if(Array.isArray(data)){
            data = data.map(d =>{
                if(isICircle(d)){
                    return {
                        data1: typeof d.data1 == "string" ? d.data1.toUpperCase(): d.data1, 
                        data2: typeof d.data2 == "string" ? d.data2.toUpperCase():d.data2,
                        data3: typeof d.data3 == "string" ? d.data3.toUpperCase(): d.data3
                    }
                }else{
                    return d
                }
            })
        }
        const width = 400;
        const height = 400;
        const outerRadius = Math.min(width, height) / 2; // 外半径

        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`)
            .attr('class', 'svg')
            .attr("style", "max-width: 100%; height: auto; font: 18px sans-serif; font-weight:bold; fill: white");

        const pie = d3.pie().value(1);
        const arc = d3.arc().innerRadius(0).outerRadius(outerRadius);

        const labelRadius = arc.outerRadius()() * 0.9;
        const innerLabelRadius = arc.outerRadius()() * 0.2;

        const innerArcLabel = d3.arc()
            .innerRadius(innerLabelRadius)
            .outerRadius(innerLabelRadius);

        // 使用 pie 函数处理数据
        const arcs = pie(data)

        svg.append("g")
            .selectAll()
            .data(arcs)
            .join("path")
            .attr('fill', (d, i) => COLORS[i % COLORS.length])
            .attr("d", arc)

        svg.append("g")
            .attr("text-anchor", "middle")
            .selectAll()
            .data(arcs)
            .join("text")
            .attr("transform", d => {
                return (
                    `translate(${labelRadius * Math.sin(d.startAngle + 0.1)}, ${-labelRadius * Math.cos(d.startAngle + 0.1)})`
                )
            })
            .call(text => text.append("tspan"))
                .text(d => {
                    return d.data.data1
                })

        svg.append("g")
            .attr("text-anchor", "middle")
            .selectAll()
            .data(arcs)
            .join("text")
            .attr("transform", d => `translate(${innerArcLabel.centroid(d)})`)
            .call(text => text.append("tspan")
                .text(d => d.data.data2))

        svg.append("g")
            .attr("text-anchor", "middle")
            .selectAll()
            .data(arcs)
            .join("text")
            .attr("transform", d => {
                return (
                    `translate(${labelRadius * Math.sin(d.endAngle - 0.1)}, ${-labelRadius * Math.cos(d.endAngle - 0.1)})`
                )
            })
            .call(text => text.append("tspan")
                .text(d => d.data.data3))


        // 添加 input 到指定的扇区
        const targetArcIndex = 0; // 假设我们想在第一个扇区添加 input
        const targetArc = arcs[targetArcIndex];

        // 计算 input 位置
        const midAngle = (targetArc.startAngle + targetArc.endAngle) / 2;
        const x = Math.cos(midAngle) * (innerLabelRadius / 2); // 放置在扇区的中间位置
        const y = -Math.sin(midAngle) * (innerLabelRadius / 2);

        // 添加 input 元素
        // const inputGroup = svg.append("g")
        //     .selectAll(null)
        //     .data([targetArc])
        //     .join(enter => enter.append("foreignObject"))
        //     // .attr("transform", (d) => `translate(${targetArc.centroid(d)})`)
        //     .attr("x", x - 16) // 调整 x 值以适应 input 的宽度
        //     .attr("y", y - 50) // 调整 y 值以适应 input 的高度
        //     .attr("width", 30)
        //     .attr("height", 25)
        //     .html(`
        //         <input 
        //             id="answerInput" 
        //             type="text" 
        //             style="width: 100%; height: 100%; border: 1px solid #ccc; background: white; text-align: center; font-size:18px; font-weight:bold" 
        //         />
        //         `);
    }, [selectedQ]);

    return (
        <>
        <svg ref={svgRef} />
        <div className="answer font-bold mt-3">
        <input 
            id="answerInput" 
            type="text" 
            className="border border-black w-24 ml-2 text-center" 
            onChange={handleChange} 
            onKeyDown={(e)=>handleEnter(e, selectedQ)} 
            placeholder="answer"
            value={inputValue}
        />
        </div>
        <Info message="something is wrong, try again" showInfo={showInfo} setShowInfo={setShowInfo}/>

        </>
    )
};


const Circle: React.FC<IQuestionContentProps> = (circleProps) => {
    const {questionTxt, color} = circleProps
    const [isWrong, setIsWrong] = useState<boolean>();

    return (
        <div className={`w-[468px] w-4/12 h-[32rem] flex flex-col items-center rounded relative border border-4 border-${color}`}>
            <div className={`absolute w-full h-full backdrop-blur-sm backdrop-grayscale ${isWrong ? 'block' : 'hidden'}`}>
                <p className={`absolute w-fit text-6xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                😭
                </p>
            </div>
            <p className='p-3 text-center'>{questionTxt}</p>
            <Pie {...circleProps } setIsWrong={setIsWrong}/>
        </div>
    )
}

export default Circle