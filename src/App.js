//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//context
import { UseFirebaseContext } from './Context/UseFirebaseContext.js'
//views
import Home from "./Views/Home.jsx";
import Presentation from "./Views/Presentation.jsx";
//style
import "./styles/styles.scss"

function App() {
  return (
    <UseFirebaseContext>
      <Router>
        <Routes>
          <Route path='/' element={<Presentation />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </UseFirebaseContext>
  );
}

export default App;
