import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getGridParticalAnswer(req, res) {
  if (req.method == "GET") {

    const { userId, questionId } = req.query;
    if(!userId || ! questionId){
      return res.status(400).json({ error: "No useId or questionId" });
    }
    try {
      const answer = await prisma.answer.findFirst({
        where:{userId:+userId, questionId:+questionId}
      })
      if(!answer){
        return res.status(200).json({ answer: ""});
      }else{
        return res.status(200).json({ answer: answer.content});
      }

    } catch (error) {
        console.log("error",error)
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
