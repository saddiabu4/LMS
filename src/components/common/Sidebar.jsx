import { cn } from "@/lib/utils"
import { BookOpen, Home, Settings, Users } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const menu = [
  { name: "Dashboard", icon: Home, path: "/" },
  { name: "Students", icon: Users, path: "/students" },
  { name: "Courses", icon: BookOpen, path: "/courses" },
  { name: "Settings", icon: Settings, path: "/settings" },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <div className="h-screen w-64 bg-white border-r p-4 flex flex-col">
      
      <div className="text-xl font-bold mb-6">
        LMS 🚀
      </div>

      <div className="space-y-2">
        {menu.map((item, index) => {
          const Icon = item.icon

          return (
            <Link
              to={item.path}
              key={index}
              className={cn(
                "flex items-center gap-3 p-3 rounded-xl cursor-pointer transition",
                location.pathname === item.path
                  ? "bg-indigo-100 text-indigo-600"
                  : "hover:bg-gray-100"
              )}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}