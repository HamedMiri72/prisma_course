import { prisma } from "@/lib/prisma"

// //size of page = 3
// export const GET= async(req) => {

//     const {searchParams} =new URL(req.url);
//     const pageNum = +(searchParams.get("pageNum")??0)  // + convert to zero ?? if there us not a pagenum just return 0
//     const pageSize = +(searchParams.get("pageSize")??5)

//     const posts = await prisma.post.findMany({
//         //offset pagination
//         // skip: 3, //we dont wanna skip ant data
//         // take: 1,

//         //skip means we have for example 10 post we skip 3 and we show take number of posts

//         skip: pageNum * pageSize,
//         take: pageSize,
//     })

//     return new Response(JSON.stringify(posts));
// }


//cursor base pagination is scalable but offset base is not scalable when id is sorted in the database
export const GET = async(req) => {

    const {searchParams} = new URL(req.url);

    const cursor = +(searchParams.get("cursor")??0)
    const pageSize = +(searchParams.get("pageSize")??5);

    const posts = await prisma.post.findMany({

        cursor: {
            //the cursor is the starting point
            id : cursor
        },

        take: pageSize,   // how many records we want to include in the response
    })

    return new Response(JSON.stringify(posts));

}