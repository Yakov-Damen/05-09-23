import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Trips from './components/Trips';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
import NewTripForm from './components/NewTripForm';
import UpdateTripForm from './components/UpdateTripForm';
import TripDetail from './components/TripDetail';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/trips' element={<Trips/>} />
        <Route path='/trip-details/:id' element={<TripDetail/>} />
        <Route path='/new-trip' element={<NewTripForm/>} />
        <Route path='/update-trip/:id' element={<UpdateTripForm/>} />
        <Route path='/register' element={<UserRegistration/>} />
        <Route path='/login' element={<UserLogin/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
