function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                name:raxit ,url:"https://raxitzora.vercel.app"
            })
            
        }, 3000);
    })
}


async function dataFetch(){
    try {
        console.log("Fetching User Data");
        const data = await fetchData();
        console.log("Data: ",data);
    } catch (error) {
        console.error("Error fetching Data");
    }
}