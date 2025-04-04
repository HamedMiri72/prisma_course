import { prisma } from "@/lib/prisma"


export const GET = async() => {

    const posts = await prisma.post.findMany({
        where:{
            OR:[

                {
                    title:{
                        contains:"Github",
                        mode :"insensitive" // makes the feild insensetive to lower case and uppercase
                    },
                },
                {
                    title: {
                        contains: "Twitter"
                    },

                },
            ],
            AND:{
                published: true
            },
        },
    })
    return new Response(JSON.stringify(posts));
}