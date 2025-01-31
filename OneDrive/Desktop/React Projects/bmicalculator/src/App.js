import "./App.css";
import React, {useState} from "react";

function App() {
//making states of application
  const[weight, setWeight] = useState(0);
  const[height, setHeight] = useState(0);
  const[bmi, setBmi] = useState('');
  const[message, setMessage] = useState('');
  
//logic behind calculating bmi

let calBmi = (e) => {

  e.preventDefault()
 
if(weight === 0 || height ===0){
  alert("Please enter a valid weight and height")
}
else{

  let bmi = (weight/(height*height)*703)
  setBmi(bmi.toFixed(1))

  if(bmi <25){
    setMessage('You are under weight')
  }
  else if(bmi >= 25 && bmi <=30){
    setMessage('You are healthy person')
  }
  else{
    setMessage('You are overWeight')
  }

}

}

//reload function

let reload = () => {
  window.location.reload()
}


  return (
    <div className="App">
      <div className="container">
        <h2 className="heading" >BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight(ibs)</label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label for="">Height(inch)</label>
            <input
              type="text"
              placeholder="Enter height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
