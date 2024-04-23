import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()
export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request, {params}: {params: {username: string}}) {

    const user = await prisma.account.findUnique({
        where: {
            username: params.username
        }
    })


    return Response.json(user);
}

