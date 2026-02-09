function fetchData(){
    return new Promise((resolve,rejected)=>{
        setTimeout(() => {
            let success = true
            if(success){
                resolve("Data fetched")
            } else{
                rejected("Rejected fetching")
            }
            
        }, 3000);
    })

}

let res = fetchData()
console.log(res);
