import './App.css'

function App() {
  const handleClick = ()=>{
    alert("clicked")
  }


  return (
    <>
<button onClick={handleClick}></button>
    </>
  )
}

export default App
