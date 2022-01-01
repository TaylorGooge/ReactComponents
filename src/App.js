import './App.css';
import { BrowserRouter as BrowserRouter, Route , Routes} from "react-router-dom";
import { HomePage } from './Components/Pages/HomePage'
import { AboutPage } from "./Components/Pages/AboutPage"

function App() {
  return (
    <div className="App">
    
        <BrowserRouter>
          <Routes>
            <Route path='/'> < HomePage /> </Route>
            <Route path='/about'> < AboutPage /> </Route>
          </Routes>
        </BrowserRouter>
      
 
    </div>
  );
}

export default App;
