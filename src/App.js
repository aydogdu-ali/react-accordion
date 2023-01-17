import Main from "./components/Main"
import data from "./helpers/data"

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Accordion Yapımı</h1>
      
      <Main data={data}/>

    </div>
  );
}

export default App;
