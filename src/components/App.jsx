import { Routes, Route} from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import RecoverPass from './RecoverPass';
import Reset_pass from './Reset_pass';
import Home from "./home";
import Shop from "./Shop";
import Confirmation from "./Confirmation";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/home" element={<Login />} />
                <Route path="/create-Account" element={<SignUp />} />
                <Route path="/recover-password" element={<RecoverPass />} />
                <Route path="/New-Password" element={<Reset_pass />} />
                <Route path="/" element={<Home />} />
                <Route path="/Confirmation" element={<Confirmation/>} />
            </Routes>
        </div>
    );
}

export default App;