import React, {useState} from 'react';
import DatePicker from 'react-date-picker';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

function App() {
  
  const [dateEntrySelected, setDateEntrySelected] = useState(new Date());
  
  // const handleInputDate = date => {
  //   setDateSelected(date);
  //   console.log(selected)
  // }
  // .toISOString().slice(0, 10)

  const handleChange = (value) => {
      const newValue = value.toISOString().slice(0, 10)
      setDateEntrySelected(value)
      console.log(value)
  }


  return (
    <div className="App">
      <input type="date" onChange={event=> console.log(event.target.value)}/>
      <DatePicker
          onChange={handleChange}
          value={dateEntrySelected}
          name="checkIn"
      />
    </div>
  );
}

export default App;
