import {useState} from 'react'
import './App.css'
import {isLeapYear} from './utils/isLeapYear'
function App() {
  const [date, setDate]=useState('')
  const [year, setYear]=useState('')

  const handleDateChange = (e) => {
    const fullDate = e.target.value
    const yearStr = fullDate.slice(0, -6)
    setDate(fullDate)
    setYear(yearStr)
  }
  return (
    <div className="App">
      <form>
        <label htmlFor="dateinput">Enter Birthdate</label>
        <input id="dateinput" type="date" value={date} onChange={handleDateChange}/>
      </form>
      <div className="text-output">
        <p>You <span className="bold">were {isLeapYear(year) ? 'born' : 'not born'}</span> on a leap year.</p>
      </div>
    </div>
  )
}

export default App
