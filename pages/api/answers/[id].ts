import type { NextApiRequest, NextApiResponse } from 'next'
import prisme from "@/lib/prisme"

type ResponseData = {
    id: string
    answer:string
}

export default async ( 
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
)=>{
    const {id} = req.query || 0
    const answer = await prisme.question.findUnique({
        where: {
            id: parseInt(id)
        },
        select: {
            key: true,
            answer: true,
        },
    })
    console.log("an", answer)
    return res.status(200).json(answer)
}




 

