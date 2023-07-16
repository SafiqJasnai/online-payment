import {
  Route,
  Routes,
  HashRouter
} from "react-router-dom";
import NameSearch from "./screens/client/NameSearch";
import StudentPayment from "./screens/client/StudentPayment";
import Home from "./screens/home/Home";
import ClientLogin from "./screens/login/ClientLogin";
import ClientRegister from "./screens/client/ClientRegister";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='' element={<Home />} />
          
          <Route path='/login' element={<ClientLogin />} />
          <Route path='/register' element={<ClientRegister />} />
          <Route path='/student-search' element={<NameSearch />} />
          <Route path='/student-payment' element={<StudentPayment />} />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;