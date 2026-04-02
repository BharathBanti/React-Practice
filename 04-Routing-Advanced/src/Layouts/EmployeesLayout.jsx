import { Outlet } from "react-router-dom"
import Employees from "../pages/Employees"

function EmployeesLayout() {
  return (
    <div>
      <Employees />
      <Outlet />
    </div>
  )
}

export default EmployeesLayout
