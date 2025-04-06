import { prisma } from "@/lib/prisma"


export const GET = async() => {

    const posts  = await prisma.post.findMany({
        orderBy: {
            likeNum: "desc"
        }
    })

    return new Response(JSON.stringify(posts));
}