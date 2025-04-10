
import './App.css'
import Parent from './components/Parent';
import UserContest from './context/UserContext';

function App() {
  const user={name: "vibha", age: 23};

  return (
    <>
      <UserContest.Provider value={user}>
        <h1>This is app components</h1>
        <Parent/>
      </UserContest.Provider>
    </>
  )
}

export default App
