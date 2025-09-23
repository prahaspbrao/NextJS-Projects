"use server";

import { db } from "@/lib/db";
import { currentUser } from "@/modules/auth/actions";
import { revalidatePath } from "next/cache";
import { dlopen } from "process";

export const getAllPlaygroundForUser = async () => {
    const user = await currentUser();

    try {
        const playground = await db.playground.findMany({
            where : {
                userId : user?.id
            },
            include : {
                user : true
            }
        });

        return playground
    } catch (error) {
        console.log(error);
    }
}

export const createPlayground = async(data : {
    title : string;
    template : "REACT" | "NEXTJS" | "EXPRESS" | "HONO" | "ANGULAR" | "VUE";
    description? : string;
}) =>{
    const user = await currentUser();

    const {template , title , description} = data;

    try {
        const playground = await db.playground.create({
            data : {
                title : title,
                description : description,
                template : template,
                userId : user?.id!
            }
        })
        console.log(playground)
        return playground;
    } catch (error) {
        console.log(error)
    }
}

export const deleteProjectById = async (id : string) => {
    try {
        await db.playground.delete({
            where : {
                id
            }
        })

        revalidatePath("/dashboard")
    } catch (error) {
        console.log(error)
    }
}

export const editProjectById = async (id : string , data : {title : string , description : string})=>{
    try {
        await db.playground.update({
            where : {
                id
            },
            data : data
        })

        revalidatePath("/dashboard")

    } catch (error) {
        
    }
}

export const duplicateProjectById = async (id : string) => {
    try {
        const originalplayground = await db.playground.findUnique({
            where : {
                id
            }

            // todo : Add template files
        })

        if(!originalplayground){
            throw new Error("Original playground not found!!");
        }

        const duplicatedPlayground = await db.playground.create({
            data : {
                title : `${originalplayground.title} (Copy)`,
                description : originalplayground.description,
                template : originalplayground.template,
                userId : originalplayground.userId

                // todo : add template files
            }
        })

        revalidatePath("/dashboard")
        return duplicatedPlayground
    } catch (error) {
        console.log(error);
    }
}