import React, { useContext } from 'react'
import { UserContext } from './UserContext'



function Dashboard() {
    const user = useContext(UserContext);
  return (
    <div>
        <h2>{user.name}</h2>
        <p>{user.role}</p>
      
    </div>
  )
}

export default Dashboard
