import { Outlet, useLoaderData } from "react-router-dom"
import Employees from "../pages/Employees"

function EmployeesLayout() {
  const employees = useLoaderData();

  return (
    <div>
      <Employees />
      <Outlet context={employees} />
    </div>
  )
}

export default EmployeesLayout
