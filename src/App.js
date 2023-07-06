import { Route, Routes } from 'react-router-dom';
import './App.css';
import Forgotpassword from './Components/Forgotpassword';
import Home from './Components/Home';
import Login from './Components/Login';
import Resetpassword from './Components/Resetpassword';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
    <Route exact path="/" element={<Login/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path="/forgot" element={<Forgotpassword/>}></Route>
    <Route path="/reset/:id" element={<Resetpassword/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
