import AdminLayout from "@/layouts/AdminLayout"
import Courses from "@/pages/courses/Courses"
import Dashboard from "@/pages/dashboard/Dashboard"
import Settings from "@/pages/settings/Settings"
import Student from "@/pages/students/Student"
import { Route, Routes } from "react-router-dom"

const Router = () => {
  return (
    <Routes>
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