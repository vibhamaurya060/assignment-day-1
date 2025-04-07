import React, { useEffect, useState } from 'react'
import axios from 'axios'
const DataFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading]=useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/users")
                setData(res.data);
                console.log(res.data)
                setLoading(false)
            } catch (error) {
                console.log("Error while fetching data")
            }
        }
        fetchData();
    }, [])

    if(loading){
        return <p>Loading...</p>
    }
    
    return (
        <div>
            <h2>User Data</h2>
            {data.map((item) => (
               <ul key={item.id} >
                 <li >{item.name}</li>
               </ul>
            ))}
        </div>
    )
}

export default DataFetch