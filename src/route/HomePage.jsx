import Header from '../Header'
import Cardlist from '../Cardlist'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
function HomePage()
{
    const [searchTerm, setSearchTerm] = useState("")
    const [searchTermJ, setSearchJob] = useState("")

    function handleInput(event) {
        setSearchTerm(event.target.value)
  }

    function handleInputJ(eventJ) {
        setSearchJob(eventJ.target.value)
  }
  //wherever we use outlet in the parent component the child component is displayed there
  return (
    <>
    <Outlet />
      <Header text="Staff List" />

      <div className="content">

        <input
          onChange={handleInput}
          type="text"
          placeholder="Search Staff"
        />
        <br></br>
        <input
          onChange={handleInputJ}
          type="text"
          placeholder="Search Job"
        />

        <Cardlist
          searchS={searchTerm}
          searchJ={searchTermJ}
        />

      </div>
    </>
  )
}
export default HomePage