import { PrismaClient } from '@prisma/client';


class PrismaSinglon {
    private static prismaInstance

    public static getInstance(){
        if(process.env.NODE_ENV  === 'production' ){
            PrismaSinglon.prismaInstance = new PrismaClient()
        }else if(!PrismaSinglon.prismaInstance){
            PrismaSinglon.prismaInstance = new PrismaClient()
        }
        return PrismaSinglon.prismaInstance
    }
}

const prisma = PrismaSinglon.getInstance()
export default prisma