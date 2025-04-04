import { prisma } from "@/lib/prisma";




export const GET = async () => {
    // const users = await prisma.user.findMany({
    //     where: {
    //         // name : {
    //         //     // startsWith: "J"
    //         //     // endsWith: "n",
    //         //     // contains: "a",
    //         //     // startsWith: "s"
    //         // }

    //         // id :{
    //         //     // in: [1,2]
    //         //     notIn: [1,2]
    //         // }
    //         // id:{
    //         //     not:{
    //         //         in:[1,2]
    //         //     }
    //         // }

    //         // id: {
    //         //     not:{
    //         //         gt: 2,
    //         //     }
    //         // }

    //         // OR:[
    //         //     {
    //         //         id:{
    //         //             not:{
    //         //                 gt:2,
    //         //             }
    //         //         },
                
    //         //     },
    //         //     {
    //         //         name: {
    //         //             startsWith: "s"
    //         //         }
    //         //     }
    //         // ]
            
    //     }
    // })

    // return new Response(JSON.stringify(users));


    const users = await prisma.user.findMany({
        // where: {
        //     posts: {
        //         every:{
        //             published: true,
        //         }
        //     }
        // }

        // where: {
        //     posts: {
        //         some: {
        //             published: false
        //         }
        //     }
        // }

        where: {
            posts: {
                none: {
                    published: true,
                }
            }
        }
    })

    return new Response(JSON.stringify(users));
}