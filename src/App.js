import './App.css';
import { BrowserRouter as BrowserRouter, Route , Routes} from "react-router-dom";
import { HomePage } from './Components/Pages/HomePage'
import { AboutPage } from "./Components/Pages/AboutPage"
import { ContactPage } from "./Components/Pages/ContactPage"
import { PortfolioPage } from "./Components/Pages/PortfolioPage"

function App() {
  return (
    <div className="App">
    
        <BrowserRouter>
          <Routes>
            <Route path='/'> < HomePage /> </Route>
            <Route path='/about'> < AboutPage /> </Route>
            <Route path='/contact'> < ContactPage /> </Route>
            <Route path='/portfolio'> < PortfolioPage /> </Route>
          </Routes>
        </BrowserRouter>
      
 
    </div>
  );
}

export default App;
