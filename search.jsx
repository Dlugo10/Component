import React, { useState } from "react";

const EmployeeFilter = ({ employees }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    setFilteredEmployees(
      employees.filter(employee =>
        `${employee.FIRST_NAME} ${employee.LAST_NAME}`
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <ul>
        {filteredEmployees.map(employee => (
          <li key={employee.EMPLOYEE_ID}>
            {employee.FIRST_NAME} {employee.LAST_NAME}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeFilter;