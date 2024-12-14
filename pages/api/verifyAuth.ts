import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import * as cookie from "cookie";

const prisma = new PrismaClient();

export default async function VerifyAuthHandler(req, res) {
  if (req.method == "POST") {
    const {token} = cookie.parse(req.headers.cookie || '');
    if(token){
      try {
        const session = await prisma.session.findUnique({
          where: {token},
          include:{
              user: true
          }
        });
  
        if(!session){
          return res.status(401).json({ error: 'no session exists' });
        }
  
        const {user} = session
        return res.status(201).json({ username: user.name, email: user.email, userId: user.id, questions: user.questions });
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
    }else{
      res.status(500)
    }

  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
