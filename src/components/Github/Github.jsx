/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useEffect } from "react"


const Github = () => {
 const [data, setData] = useState([])
    useEffect(()=> {
    fetch('https://api.github.com/users/VishalPachpor')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setData(data)
    })
}, [])
    return (
    <div>
    Github followers : {data.followers}
    
    <img src={data.avatar_url} alt="Github Avatar" width={300} />
    </div>
  )
}

export default Github