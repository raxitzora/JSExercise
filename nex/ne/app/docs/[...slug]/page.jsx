import React from 'react'

export default async function page({params}) {
    const {slug} = await params
    
  return (
    <div>
       slug {slug}
      
    </div>
  )
}

