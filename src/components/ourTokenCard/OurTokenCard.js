import React from 'react'

export default function OurTokenCard({data}) {
  return (
   <>
   <div className={`row inner-row ${data.number}`}>
    <div className=" col-xl-8">
        <h1>{data.h1}</h1>
        <p>{data.p}</p>
    </div>
   </div>
   </>
  )
}
