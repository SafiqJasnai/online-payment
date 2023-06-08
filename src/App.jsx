import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from "./screens/login/Login";
import NameSearch from "./screens/client/NameSearch";
import StudentDetails from "./screens/client/StudentDetails";
import StudentTable from "./screens/admin/StudentTable";

const App = () => {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path='' element={<Login />} />
          <Route path='/search-name' element={<NameSearch />} />
          <Route path='/student-details' element={<StudentDetails />} />
          <Route path='/student-table' element={<StudentTable />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;