
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [dataPerPage] = useState(5);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(res.data)
        setData(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const totalPages = Math.ceil(data.length / dataPerPage)

  const handleNext = () => {
    if (currentPage < totalPages) {
      setcurrentPage(prev => prev + 1);
    }
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setcurrentPage(prev => prev - 1);
    }
  }


  return (
    <div style={{marginLeft: "400px"}}>
      <h2>User Data</h2>

      {currentData.map((item) =>
      (
        <div key={item.id} style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ccc" , width:"200px", textAlign:"center"}}>
          <strong>{item.name}</strong>
          <p>{item.username}</p>
          <p>{item.email}</p>
        </div>

      )
      )}

      <div>
        <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      </div>

    </div>
  )
}

export default App
