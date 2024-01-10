import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
function App() {
  const [amount,setAmount]=useState(0)
  const [year,setYear]=useState(0)
  const [rate,setRate]=useState(0)
  const [interest,setInterest]=useState(0)
  console.log(amount,year,rate,interest);
  const Calculate=(e)=>{
    const output = amount*year*rate/100;
    setInterest(output)
  }
  const Reset=(e)=>{
    setAmount(0)
    setYear(0)
    setRate(0)
    setInterest(0)
  }
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Simple Interest Calculator</h1>
          <p>Calculate your simple interest with us ❤️</p>
        </div>
        <div className="total">
          <h3>&#8377; {interest}</h3>
          <p>Your Total Interest</p>
        </div>
        <div className="form">
          <form>
            <div className="input">
              <TextField id="standard-basic" value={amount||""} onChange={(e)=>setAmount(e.target.value)} label="Amount" variant="standard" /><br />
              <TextField id="standard-basic" value={year||""} onChange={(e)=>setYear(e.target.value)} label="Year" variant="standard" /><br />
              <TextField id="standard-basic" value={rate||""} onChange={(e)=>setRate(e.target.value)} label="Rate" variant="standard" /><br />
            </div>
            <div className="button">
              <Button variant="contained" onClick={e=>Calculate(e)}>Calculate</Button>
              <Button variant="outlined" onClick={e=>Reset(e)}>Reset</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;