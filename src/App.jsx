import {
  Route,
  Routes,
  HashRouter
} from "react-router-dom";
import Login from "./screens/login/Login";
import NameSearch from "./screens/client/NameSearch";
import StudentPayment from "./screens/client/StudentPayment";
import StudentTable from "./screens/admin/StudentTable";
import CreateNewStudentDetails from "./screens/admin/CreateNewStudentDetails";
import EditStudentDetails from "./screens/admin/EditStudentDetails";
import CreateUser from "./components/CreateUser";
import Home from "./screens/home/Home";
import ClientLogin from "./screens/login/ClientLogin";
import ClientRegister from "./screens/client/ClientRegister";
import StudentDetails from "./screens/admin/StudentDetails";
import LoginApprovalRequest from "./screens/admin/LoginApprovalRequest";
import LoginRequestDetails from "./screens/admin/LoginRequestDetails";
import StudentPage from "./screens/admin/StudentPage";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='' element={<Home />} />

          <Route path='/durian-login' element={<Login />} />
          <Route path='/student-table' element={<StudentTable />} />
          <Route path='/student-details' element={<StudentDetails />} />
          <Route path='/add-student' element={<CreateNewStudentDetails />} />
          <Route path='/edit-student-details' element={<EditStudentDetails />} />
          <Route path='/login-request' element={<LoginApprovalRequest />} />
          <Route path='/login-request-details' element={<LoginRequestDetails />} />
          <Route path='/student' element={<StudentPage />} />
          
          <Route path='/login' element={<ClientLogin />} />
          <Route path='/register' element={<ClientRegister />} />
          <Route path='/search-name' element={<NameSearch />} />
          <Route path='/student-payment' element={<StudentPayment />} />
          <Route path='/create-user' element={<CreateUser />} />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;