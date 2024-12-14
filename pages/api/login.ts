import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as cookie from "cookie"

const prisma = new PrismaClient();

export default async function LoginHandler(req, res){
    if(req.method == "POST"){
        const {email, password} = req.body
        try{
           const user = await prisma.user.findUnique(({
                where: {email}
           }))
           if(!user){
                res.status(401).json({ error: 'Invalid Email' });
           }
           console.log("login", user)
           const isValidPass = await bcrypt.compare(password, user.password)
           if(!isValidPass){
                res.status(401).json({ error: 'Invalid Password' });
            }
            const token = jwt.sign({email: user.email}, process.env.JWT_TOKEN)
            await prisma.session.create({
             data:{
                 userId: user.id,
                 token,
                 expiresAt: new Date(Date.now() + 3600 * 1000 * 72), 
             }
            })
            res.setHeader(
             'Set-Cookie',
             cookie.serialize('token', token, {
                 httpOnly: true,
                 secure: process.env.NODE_ENV !== 'development',
                 maxAge: 3600 * 72,
                 path: '/',
             })
            )
            // console.log("haha", user)
           res.status(200).json({username:user.name, email: user.email, userId: user.id, questions: user.questions})
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}