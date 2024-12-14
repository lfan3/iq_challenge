import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as cookie from "cookie"


const prisma = new PrismaClient();

export default async function SignUpHandler(req, res){
    if(req.method == "POST"){
        const {email, username, password} = req.body
        try{
           const hashPass = await bcrypt.hash(password, 10)
           const user = await prisma.user.create(({
             data:{
                email,
                name:username,
                password:hashPass
             }
           }))
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
           res.status(201).json({username:user.name, email: user.email, userId: user.id})
        } catch (error) {
            console.log("signup error", error)
            if (error.code === 'P2002') {
                return res.status(400).json({ error: 'Email already exists' });
            }
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}