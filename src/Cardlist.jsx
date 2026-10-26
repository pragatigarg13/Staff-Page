import './Cardlist.css'
import Card from './Card'
import staff from './staff.jsx'
import { useContext } from 'react'
import { StaffContext } from './context/StaffContext.jsx'

function Cardlist(props) {
  const {staff} = useContext(StaffContext);
  const filteredStaff = staff.filter(function (item) {
    return (
      item.title.toLowerCase().includes(props.searchS.toLowerCase()) &&
      item.job.toLowerCase().includes(props.searchJ.toLowerCase())
    )
  })

  return (
    <div className="cardlist">
      {filteredStaff.map(function (item, i) {
        return (
          <Card
            key={i}
            img={item.img}
            alt={item.alt}
            title={item.title}
            job={item.job}
          />
        )
      })}
    </div>
  )
}

export default Cardlist