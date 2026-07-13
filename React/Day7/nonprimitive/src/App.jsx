//  import React from 'react'
 
//  export const App = () => {
//   const arr = [1,2,3,4,5,6,7,7]
//    return (
//      <>
   
//      <h1>{arr}</h1>
//      <div> 
//       <ol>
//         {arr.map((e,i)=>(<li key={i+1}>{e} </li> ))  }
//       </ol>
//       <p>
//         {arr.filter ((e)=>e%2!=0)}</p>
//      </div>
      
//        </>
//    )
//  }
//  export default App

//object rendering methods


// import React from 'react'

// export const App = () => {
// const obj = { Name:"React" ,subject:"Node", Skill:{main: "html"} }
 
// const arr=[]
// const datas=[...arr,obj]
// console.log(datas);

//  return (

//     <>
//     <h2>{obj.Name}</h2>
//     <h2>{obj.subject}</h2>
//     <h2>{obj.Skill.main}</h2>

//     </>
   
//   )
// }
// export default App

//array of object rendering

import React from 'react'

export const App = () => {
  const data =[
    {Name:"React",Subject:"Html"}
    {Name:"Node",Subject:"c++"}
    {Name:"css", subject:"tailwind css"}
  ]
  return (
     <>
     <h2>{data.map ((e,i)=)}</h2>
     </>
  )
  
}
export default App
 