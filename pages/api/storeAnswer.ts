import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function StoreAnswerHandler(req, res) {
  if (req.method == "POST") {
    const { userId, questionId, answer } = req.body;
    try {
      await prisma.answer.create({
        data: {
          userId,
          questionId,
          content: answer,
        },
      });

      const user = await prisma.user.findUnique({
        where:{id:userId}
      })

      if(!user){
        return res.status(404).json({ error: "User not found" });
      }

      let questions = "";
      let qn = 0;
      if(user.questions){
        const qa = user.questions.split(",");
        qn = qa.length;
        if(!qa.include(questionId)){
            questions =`${user.question}, ${questionId}`
        }
      }else{
        questions = questionId
      }

      await prisma.user.update({
        where: {id: userId},
        data:{
            questions
        }
      })
    //   answer all the question
      if(qn >= 44){
        return res.status(200).json({ message: "Answer created", extra: "all" });
      }

      return res.status(200).json({ message: "Answer created", extra: 'part' });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
