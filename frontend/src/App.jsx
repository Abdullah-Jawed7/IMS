import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Customers from "./pages/customers.jsx";
function App() {
  return (
    <>
    

      <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers" element={<Customers/>} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
