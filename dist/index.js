// // import { PrismaClient } from "@prisma/client";
// // const prisma = new PrismaClient();
// // const res = async function insertUser(){
// //     await prisma.user.create({
// //      data: {
// //         username,
// //         password,
// //         firstName,
// //         lastName
// //     }
// //   })
// //     console.log("User inserted successfully");
// // }
// // insertUsers("bresserk1",12334,"kapil","solanki");
// // import { PrismaClient } from "@prisma/client";
// // const client = new PrismaClient();
// //  async function insertUser(){
// //    const  res =  await client.user.findFirst({
// //         data:{
// //             username:"Urvish ",
// //         email:"urvish67@gmail.com",
// //     password:"urvish123"
// //                   }
// //     })
// //     console.log(res);
// //     console.log("User inserted successfully");
// // }
// // insertUser();
// \\\
import { PrismaClient } from "./generated/prisma";
const client = new PrismaClient();
async function insertUser() {
    const res = await client.user.findFirst({
        where: {
            id: 1
        },
        include: {
            todos: true
        }
    });
    console.log(res);
}
insertUser();
