import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function updateAnswer(req, res) {
  if (req.method == "POST") {
    const { content, userId, questionId } = req.body;
    
    const contentStr = typeof content == "string" ? content : JSON.stringify(content)
    console.log("aaa",content, userId, questionId)
    if(!userId || ! questionId || !content){
      return res.status(400).json({ error: "No useId or questionId or no content" });
    }
    try {
      const answer = await prisma.answer.findFirst({
        where:{userId:+userId, questionId:+questionId}
      })

      if(!answer){
        // no answer create one
        await prisma.answer.create({
            data:{
                userId,
                questionId,
                content: contentStr
            }
        })
        return res.status(200).json({ message: "Answer is saved" });
      }else{
        // update existing answer 
        await prisma.answer.update({
            where: {id: answer.id},
            data:{
                userId,
                questionId,
                content: contentStr
            }
          })
      }

      return res.status(200).json({ message: "Answer is saved"});
    } catch (error) {
        console.log("ee",error)
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
