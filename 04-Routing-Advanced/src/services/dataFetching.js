export async function usersDataFetching() {
  const res = await fetch(`http://localhost:3001/employees`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch employees data, try again later.")
  }
  return data;
}

export async function employeeDetailsFetching(id) {
  const res = await fetch(`http://localhost:3001/employees/` + id);
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch employees data, try again later.")
  }
  return data;
}