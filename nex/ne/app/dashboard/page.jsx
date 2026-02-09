import React from 'react'
import Link from 'next/link'


function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
        <Link href={"/dashboard/reports"}>ViewReports</Link>
      
    </div>
  )
}

export default Dashboard
