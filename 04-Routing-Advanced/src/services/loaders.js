import { usersDataFetching, employeeDetailsFetching } from "./dataFetching";

/* export async function shiftALoader(){
  const employees = await usersDataFetching();
  return employees.filter(employee => employee.shift === 'A');
}

export async function shiftBLoader(){
  const employees = await usersDataFetching();
  return employees.filter(employee => employee.shift === 'B');
} */

export async function employeesLoader(){
  const employees = await usersDataFetching();
  return employees;
}

export async function employeesDetailsLoader({ params }){ 
  const {id} = params;
  const employees = await employeeDetailsFetching(id);
  return employees;
}
