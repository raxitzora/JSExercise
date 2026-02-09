import { NextResponse } from "next/server";

export const users = [
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
export async function POST(request){
    try {
        const {name,age} = await request.json();

        if(!name || !age){
            return NextResponse.json({
                success:false,
                error:"Name and age are required"
            },{status:400})
        }


        const nameExists = users.find(users=>users.name===name)
        if(nameExists){
            return NextResponse.json({
                success:false,
                error:"user already exists"
            },{status:400})
        }

        const newUser = {
            id:users.length + 1,
            name:name,
            age:age
        }

        users.push(newUser)

        return NextResponse.json({success:true,data:users,message:"User Created"},{status:201})
        
    } catch (error) {
        return NextResponse.json(
            {success:false,error:"failed to create user"},
            {status:500}
        )
        
    }

}