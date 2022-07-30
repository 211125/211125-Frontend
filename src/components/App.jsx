import { Routes, Route} from "react-router-dom";
import Login from './Log_in';
import Sign_up from './Sign_up';
import Recover_pass from './Recover_pass';
import Reset_pass from './Reset_pass';
import Index from "./Index";
import Shop from "./Shop";
import Confirmation_Acount from "./Confirmation_Acount";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/create-Account" element={<Sign_up />} />
                <Route path="/recover-password" element={<Recover_pass />} />
                <Route path="/New-Password" element={<Reset_pass />} />
                <Route path="/home" element={<Index />} />
                <Route path="/Confirmation" element={<Confirmation_Acount/>} />
            </Routes>
        </div>
    );
}

export default App;