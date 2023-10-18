/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"


const Github = () => {
const data = useLoaderData()

// With useEffect and useState

//  const [data, setData] = useState([])
//     useEffect(()=> {
//     fetch('https://api.github.com/users/VishalPachpor')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         setData(data)
//     })
// }, [])
    return (
    <div>
    Github followers : {data.followers}
    
    <img src={data.avatar_url} alt="Github Avatar" width={300} />
    </div>
  )
}

export default Github

// with Loader function from react redux
export const githubInfoLoader = async () => {
   const response = await fetch("https://api.github.com/uses/VishalPachpor")
   return response.json()
}