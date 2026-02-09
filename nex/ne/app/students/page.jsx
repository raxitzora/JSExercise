import React from 'react'

async function StudentsPage() {
    const res = await fetch("http://localhost:3000/api/students",{
        cache:"no-cache",
    });

    if(!res.ok){
        throw new Error("failed to fetch");
    }

    return res.json()

async function Students(){


}
}


