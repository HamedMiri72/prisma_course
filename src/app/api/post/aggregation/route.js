import { prisma } from "@/lib/prisma"



export const GET = async() => {

    const aggregation = await prisma.post.aggregate({
        _sum:{
            likeNum: true,
        },
        _avg:{
            likeNum: true,
        },
        _count:{
            id: true,
        },
        _max:{
            likeNum: true,
        },
        _min:{
            likeNum: true,
        }
    })

    return new Response(JSON.stringify(aggregation));
}