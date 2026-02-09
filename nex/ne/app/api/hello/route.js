import { NextResponse } from "next/server";

let users = [
    {
        id:1,
        name:"raxit",
        age:21
    },
    {
        id:2,
        name:"raxit2",
        age:22
    },
    {
        id:3,
        name:"raxit3",
        age:23
    },
    {
        id:4,
        name:"raxit4",
        age:24
    },

]


export async function GET(request){
    try {
        return NextResponse.json({
            success:true,
            data:users,
            total:users.length
        })
        
    } catch (error) {
        return NextResponse.json({
            success:false,
            error:"Failed to get users",
        })
        
    }
}