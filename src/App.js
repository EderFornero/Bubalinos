//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//context
import { UseFirebaseContext } from './Context/UseFirebaseContext.js'
//views
import Home from "./Views/Home.jsx";
import Presentation from "./Views/Presentation.jsx";
import Handle from "./Views/Handle.jsx";
//style
import "./styles/styles.scss"

//handle views
import Alleys from './Views/HandleViews/Alleys'
import Caravan from './Views/HandleViews/Caravan'
import Facilities from './Views/HandleViews/Facilities'
import Reception from './Views/HandleViews/Reception'
import Sacrifice from './Views/HandleViews/Sacrifice'
import Shipment from './Views/HandleViews/Shipment'
import Sleeve from './Views/HandleViews/Sleeve'
import Vacc from './Views/HandleViews/Vacc'

function App() {
  return (
    <UseFirebaseContext>
      <Router>
        <Routes>
          <Route path='/' element={<Presentation />} />
          <Route path='/home' element={<Home />} />
          <Route path='/handle/*' element={<Handle />}>
            <Route path='alleys' element={<Alleys />} />
            <Route path='caravan' element={<Caravan />} />
            <Route path='facilities' element={<Facilities />} />
            <Route path='reception' element={<Reception />} />
            <Route path='sacrifice' element={<Sacrifice />} />
            <Route path='shipment' element={<Shipment />} />
            <Route path='sleeve' element={<Sleeve />} />
            <Route path='vacc' element={<Vacc />} />
          </Route>
        </Routes>
      </Router>
    </UseFirebaseContext>
  );
}

export default App;
