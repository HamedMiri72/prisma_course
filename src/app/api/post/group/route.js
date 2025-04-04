import { prisma } from "@/lib/prisma"


export const GET = async() => {

    const gruopPosts = await prisma.post.groupBy({
        by:["authorId"],
        _sum:{
            likeNum: true,
        },
        _avg: {
            likeNum: true,
        }
    })

    return new Response(JSON.stringify(gruopPosts));
}