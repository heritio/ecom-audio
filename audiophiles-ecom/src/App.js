import logo from './logo.svg';
import './App.css';
import {data} from './data.json'
function App() {
  return (
    <div className="App">
      <div>
        {data.map((item) =>{
         return (
         <p>{item.name}</p>
         )
      })}
        </div> 
    </div>
  );
}

export default App;
