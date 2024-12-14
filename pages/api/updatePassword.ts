import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';


const prisma = new PrismaClient();

export default async function updatePassword(req, res) {
  if (req.method == "PUT") {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
        where:{email}
    })
    if(!user){
        return res.status(400).json({ error: "the email does not exist" });
    }
    const {id} = user;
    const hashPass = await bcrypt.hash(password, 10)
    await prisma.user.update({
        where:{id},
        data:{
            password:hashPass
        }
    })
    res.setHeader('Set-Cookie', 'token=; Path=/; HttpOnly; Max-Age=0');

    return res.status(200).json({ message: "Password is updated"});
  }else{
    res.status(405).json({ error: "Method not allowed" });
  }

}