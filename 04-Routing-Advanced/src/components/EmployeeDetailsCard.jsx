import { useLoaderData } from "react-router-dom";

function EmployeeDetails() {
  const employee = useLoaderData();

  return (
    <div>
      <div>
        {employee.name}
      </div>
    </div>
  )
}

export default EmployeeDetails;
