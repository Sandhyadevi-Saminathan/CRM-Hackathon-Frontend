import './App.css';
import {

  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Login from './components/login';
import Register from './components/Register';
import UserList from './components/Userlist';
import EditUser from './components/EditUser';
import Contact from './components/Contact';
import Lead from './components/Lead';
import RequestService from './components/RequestService';
import Service from './components/Service';
import Profile from './components/profile';
import Home from './components/Home';
import Addemployee from './components/Addemployee';
import Userdata from './components/Userdata';
import ResestPassword from './ResetPassword';
import ForgetPassword from './components/ForgetPassword';
import Verification from './components/Verification';
import ChangePassword from './components/ChangePassword';
import Leaddetails from './components/leaddetails';
import Editlead from './components/editlead';
import Servicedetails from './components/servicedetails';
import Editservice from './components/editservice';




function App() {
  return (


    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid mt-5">

            <BrowserRouter>

              <Routes>

                <Route path='/' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='Home/' element={<Home />} />
                <Route path='Userdata/:id' element={<Userdata />} />
                <Route path='/lead' element={<Lead />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/rservice' element={<RequestService />} />
                <Route path='/service' element={<Service />} />
                <Route path='user/:id' element={<Profile />} />
                <Route path='/userlist' element={<UserList />} />
                <Route path='/edit/:id' element={<EditUser />} />
                <Route path='/Addemployee' element={<Addemployee />} />
                <Route path='lead' element={<Lead />} />
                <Route path='/reset' element={<ResestPassword />} />
                <Route path='/ForgetPassword' element={<ForgetPassword />} />
                <Route path='/Verification/:id' element={<Verification />} />
                <Route path='/ChangePassword/:id' element={<ChangePassword />} />
                <Route path='leaddetails/:id' element={<Leaddetails />} />
                <Route path='/editlead/:id' element={<Editlead />} />
                <Route path='servicedetails/:id' element={<Servicedetails />} />
                <Route path='/editservice/:id' element={<Editservice />} />

              </Routes>


            </BrowserRouter>
          </div>
        </div>
      </div>
    </div >

  );
}

export default App;
