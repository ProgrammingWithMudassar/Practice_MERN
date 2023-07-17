import './App.css'
import {
  Home, Login, SignUp
} from './Pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './Utils/PrivateRoute.jsx'
import { Navbar } from './Components/index'


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>

          {/* public route */}
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signUp' element={<SignUp />} />



          {/* private route */}
          <Route path='/' element={<PrivateRoutes />} >
            <Route exact path="/allow" element={<Home />} />
          </Route>



        </Routes>
      </Router>
    </div>
  )
}

export default App
