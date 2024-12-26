import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function updateQuestionsInUser(req, res) {
  if (req.method == "PUT") {
    const { userId, questionId } = req.body;
    if(!userId || ! questionId){
      return res.status(400).json({ error: "No useId or questionId" });
    }
    try {
      const user = await prisma.user.findUnique({
        where:{id:userId}
      })

      if(!user){
        return res.status(404).json({ error: "User not found" });
      }

      let questions = "";
      let qn = 0;
      if(user.questions){
        const qa = Array.from(new Set(user.questions.split(",").filter(q=>q !== "undefined")));
        qn = qa.length;
        if(!qa.includes(String(questionId))){
          const newQ = qa.join(',')
          questions =`${newQ},${questionId}`
        }else{
          questions = user.questions
        }
      }else{
        questions = String(questionId)
      }

      await prisma.user.update({
        where: {id: userId},
        data:{
            questions
        }
      })
    //   answer all the question
      if(qn >= 44){
        return res.status(200).json({ message: "Answer created", extra: "all", correct: questions });
      }

      return res.status(200).json({ message: "Answer created", extra: 'part',correct: questions });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
