import { NextRequest, NextResponse } from "next/server";

let students = [
  {
    id: 1,
    name: "Aarav Patel",
    age: 20,
    grade: "A",
    marks: {
      math: 92,
      science: 88,
      english: 85
    },
    isActive: true
  },
  {
    id: 2,
    name: "Riya Sharma",
    age: 19,
    grade: "B",
    marks: {
      math: 78,
      science: 81,
      english: 74
    },
    isActive: true
  },
  {
    id: 3,
    name: "Kunal Mehta",
    age: 21,
    grade: "C",
    marks: {
      math: 65,
      science: 60,
      english: 58
    },
    isActive: false
  },
  {
    id: 4,
    name: "Neha Verma",
    age: 20,
    grade: "A",
    marks: {
      math: 95,
      science: 91,
      english: 89
    },
    isActive: true
  }
];


export async function GET(request){
    try {
         return NextResponse.json({
        success:true,
        status:{200:"OK"},
        data:students
    })
    
    } catch (error) {
        return NextResponse.json({
            success:false,
            status:500,
            error:"Failed to GETdata"
        })
    }
   
}