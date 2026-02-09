import { useEffect } from "react"
import { useState } from "react"



function App(){

  const [users,setUsers] = useState([])

  useEffect(()=>{
    async function loadUsers(){
      const res= await fetch("https://jsonplaceholder.typicode.com/todos")
      const con =await res.json()
      setUsers(con)
    }
    loadUsers()
  },[])
  return(
    <>
    <div>
      {users.map((items)=>(
        <div key={items.userId}>
          <li>{items.title}</li>
        </div>
      ))}
  

  
    </div>

    </>

  )

}
export default App
