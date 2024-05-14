import logo from './logo.svg';
import './App.css';
import Input from './Input';

function App() {
  const belowText=(value)=>{
    return(
      <h2>
        input value is {value}
      </h2>
    )
  }
  return (
    <div className="App">
      <Input belowText={belowText}/>
    </div>
  );
}

export default App;
