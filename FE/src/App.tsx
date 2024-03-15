
import './index.css'
import * as React from 'react'
import { Vote } from '@/pages/Users/Vote.tsx';
import { DashBoard } from './pages/Admin/DashBoard.tsx';
import { ListPaslon } from './pages/Admin/ListPaslon.tsx';
import { ListPartai } from './pages/Admin/ListPartai.tsx';
import { AddPartai } from './pages/Admin/AddPartai.tsx';
import { AddPaslon } from './pages/Admin/AddPaslon.tsx';
import { Navigate, Outlet, Route, Routes, } from 'react-router-dom'
import { Users } from './pages/Users/Users.tsx'
import { Detail } from './pages/Users/Detail.tsx';


function App() {

  // React.useEffect(() => {
  //   localStorage.removeItem("Users")
  //   localStorage.removeItem("Admin")
  // }, [])

  // function PrivateRoute() {
  //   const user = localStorage.getItem("Users")
  //   if (user) {
  //     return <Outlet />
  //   } else {
  //     return <Navigate to="/" />
  //   }
  // }

  // function PrivateRouteAdmin() {
  //   const admin = localStorage.getItem("Admin")
  //   if (admin) {
  //     return <Outlet />
  //   } else {
  //     return <Navigate to="/" />
  //   }
  // }

  return (
    <>
      <Routes>
        <Route path="/" element={<Users />} />

        <Route path="/" element={<Users />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/detail1" element={<Detail />} />
        {/* <Route path="/" element={<PrivateRoute />} >
        </Route>

        <Route path="/" element={<PrivateRouteAdmin />} >
        </Route> */}
        <Route path="/admin" element={<DashBoard />} />
        <Route path="/listpartai" element={<ListPartai />} />
        <Route path="/listpaslon" element={<ListPaslon />} />
        <Route path="/addpartai" element={<AddPartai />} />
        <Route path="/addpaslon" element={<AddPaslon />} />

      </Routes>
    </>
  )
}

export default App
