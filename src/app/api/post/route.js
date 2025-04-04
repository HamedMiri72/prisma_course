import { prisma } from "@/lib/prisma"


export const GET = async() => {

    // const posts = await prisma.post.findMany({
    //     where:{
    //         OR:[

    //             {
    //                 title:{
    //                     contains:"Github",
    //                     mode :"insensitive" // makes the feild insensetive to lower case and uppercase
    //                 },
    //             },
    //             {
    //                 title: {
    //                     contains: "Twitter"
    //                 },

    //             },
    //         ],
    //         AND:{
    //             published: true
    //         },
    //     },
    // })
    // return new Response(JSON.stringify(posts));

    const posts = await prisma.post.findMany({
        // where: {
        //     author: {
        //         is : {
        //             name: "Jack"
        //         }
        //     }
        // }

        where: {
            author: {
                isNot: {
                    name: "Jack"
                },
                is:{
                    email: {
                        startsWith: "s"
                    }
                }
            },

        },
        // include: {
        //     author: true,
        // }
        select: {
            title: true,
            author: {
                select: {
                    name: true,
                    email: true,
                }
            }
        }
        //we can not use select and include in the same level
    })

    return new Response(JSON.stringify(posts));
}