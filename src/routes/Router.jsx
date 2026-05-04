import AdminLayout from "@/layouts/AdminLayout"
import Courses from "@/pages/admin/Courses"
import Dashboard from "@/pages/admin/Dashboard"
import Settings from "@/pages/admin/Settings"
import Student from "@/pages/admin/Student"
import Login from "@/pages/auth/Login"
import { Route, Routes } from "react-router-dom"

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} /> 
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="students" element={<Student />} />
        <Route path="courses" element={<Courses />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default Router 