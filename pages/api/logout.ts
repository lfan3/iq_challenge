import { NextApiRequest, NextApiResponse } from 'next';
import * as cookie from 'cookie';
import prisma from '@/lib/prisme';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {token} = req.cookies;
    if(!token){
        return res.status(200).json({message: 'Token is expired'})
    }
    try{
        await prisma.session.delete({where:{token}})
        res.setHeader(
            "Set-Cookie",
            cookie.serialize('token','',{
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                maxAge: -1,
                path: '/',
            })
        )
        res.status(200).json({ success: true });
    }catch(e){
        res.status(500).json({ error: 'Internal Server Error' });
    }
}