// import './App.css'
// import Sidebar from './components/Sidebar.jsx';
// import Dashboard from './pages/Dashboard.jsx';

// function App() {
//   return(
//     <>
//     <div className='flex '>
//       <Sidebar/>
//     <Dashboard/>
//     </div>
//     </>
//   );
// }

// export default App

// import { useState } from "react";
// import "./App.css";
// // import Header from './components/layout/Header.jsx'
// import Sidebar from "./components/Sidebar.jsx";
// import Dashboard from "./pages/Dashboard.jsx";

// function App() {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [currentPage, setCurrentPage] = useState("dashboard");
//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500 ">
//         <div className="flex h-screen overflow-hidden">
//           <Sidebar
//             collapsed={sidebarCollapsed}
//             onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
//             currentPage={currentPage}
//             onPageChange={setCurrentPage}
//           />
//           <div className="flex flex-1 flex-col overflow-hidden">
//             {/* <Header 
//           onToggleSidebar={()=>setSidebarCollapsed(!sidebarCollapsed)}
//           sidebarCollapsed={sidebarCollapsed}/> */}
//           <div>header <ul><li></li></ul></div>
//             <main className="flex-1 overflow-y-auto bg-transparent">
//               <div className="p-2 md:p-4 xl:p-6 space-y-6">
//                 {currentPage === "dashboard" && <Dashboard />}
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// 1:40:00

import { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Customers from "./pages/customers.jsx";
// import Login from "./pages/Login";
// import { ToastContainer } from "react-toastify";
// import Dashboard from "./pages/Dashboard";
// import AuthRoutes from "./routes/AuthRoutes";
// import PrivateRoutes from "./routes/PrivateRoutes";
// import Vendors from "./pages/Vendors";
// import Layout from "./components/Layout";
// import Vendors1 from "./pages/Vendors";
// import VendorBills from "./pages/VendorBills";
// import VendorBills1 from "./pages/VendorBills";
// import Customers from "./pages/Customers";
// import AllVendorBills from "./pages/AllVendorBills";
Link
function App() {
  return (
    <>
    

      <Routes>
      {/* <Route path="/" element={<Login />}/>
        <Route element={<AuthRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route> */}

        
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers" element={<Customers/>} />
            {/* <Route path="/vendors" element={<Vendors1 />} />
            <Route path="/vendors/:id/bills" element={<VendorBills1 />}/>
            <Route path="/customers" element={<Customers />} />
            <Route path="/all_vendor_bills" element={<AllVendorBills />} /> */}
          </Route>
      </Routes>
      {/* <ToastContainer /> */}
    </>
  );
}

export default App;
