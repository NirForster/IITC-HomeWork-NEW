// View Employees: Display a list of all employees. check
// Add Employee: Add new employees to the list.. check
// Delete Employee: Remove an employee from the list. check
// Edit Employee: Edit employee details
// Filter Employees: Allow filtering employees by department.
import { utils } from "./utils.js";

const elEmployeeForm = document.getElementById("employee-form");
const elEmployeeTable = document.getElementById("employee-table");
let editingEmployeeIndex = null; // Tracks if we are editing an employee

const employeeDummyData = [
  {
    id: utils.makeId(),
    firstName: "Alice",
    lastName: "Smith",
    age: 28,
    startDate: "2020-06-15",
    department: "Marketing",
    salary: 50000,
  },
  {
    id: utils.makeId(),
    firstName: "John",
    lastName: "Doe",
    age: 35,
    startDate: "2018-01-25",
    department: "Sales",
    salary: 60000,
  },
  {
    id: utils.makeId(),
    firstName: "Emma",
    lastName: "Johnson",
    age: 42,
    startDate: "2015-03-12",
    department: "IT",
    salary: 70000,
  },
  {
    id: utils.makeId(),
    firstName: "Michael",
    lastName: "Brown",
    age: 30,
    startDate: "2019-07-01",
    department: "Finance",
    salary: 55000,
  },
  {
    id: utils.makeId(),
    firstName: "Sophia",
    lastName: "Williams",
    age: 26,
    startDate: "2021-05-20",
    department: "HR",
    salary: 45000,
  },
  {
    id: utils.makeId(),
    firstName: "David",
    lastName: "Taylor",
    age: 39,
    startDate: "2017-09-14",
    department: "Operations",
    salary: 64000,
  },
  {
    id: utils.makeId(),
    firstName: "Laura",
    lastName: "White",
    age: 32,
    startDate: "2016-11-03",
    department: "Logistics",
    salary: 50000,
  },
];

const employeeList = [...employeeDummyData];

// render employeeDummyData:
function generateEmployees() {
  elEmployeeTable.innerHTML = ""; //clear Table
  //   create table headers:
  const columnHeaders = document.createElement("tr");
  columnHeaders.innerHTML = `
    <th>First name</th>
    <th>Last name</th>
    <th>Age</th>
    <th>Start Date</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Action</th>
  `;
  elEmployeeTable.appendChild(columnHeaders);

  //   create Table Data (employees)
  employeeList.forEach((employee, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = ` 
          <td>${employee.firstName}</td>
          <td>${employee.lastName}</td>
          <td>${employee.age}</td>
          <td>${employee.startDate}</td>
          <td>${employee.department}</td>
          <td>${employee.salary}</td>
          <td>
            <button class="delete-button" data-index="${index}">Delete</button>
            <button class="edit-button" data-index="${index}">Edit</button>
          </td>`;
    elEmployeeTable.appendChild(tr);
  });

  // Add event listeners for delete buttons
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      deleteEmployee(index);
    });
  });

  // Add event listeners for edit buttons
  const editButtons = document.querySelectorAll(".edit-button");
  editButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      editEmployee(index);
    });
  });
}

generateEmployees();

function addEmployee() {
  // input elems:
  const elEmployeeFirstName = document.getElementById("First-Name-input");
  const elEmployeeLastName = document.getElementById("Last-Name-input");
  const elEmployeeAge = document.getElementById("Age-input");
  const elEmployeeStartDate = document.getElementById("Start-Date-input");
  const elEmployeeDepartment = document.getElementById("Department-input");
  const elEmployeeSalary = document.getElementById("Salary-input");

  //   event to handle submittion and adding an employee
  elEmployeeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newEmployee = {
      firstName: elEmployeeFirstName.value,
      lastName: elEmployeeLastName.value,
      age: elEmployeeAge.value,
      startDate: elEmployeeStartDate.value,
      department: elEmployeeDepartment.value,
      salary: elEmployeeSalary.value,
      id: utils.makeId(),
    };

    if (editingEmployeeIndex !== null) {
      // If editing, update the existing employee
      employeeList[editingEmployeeIndex] = newEmployee;
      editingEmployeeIndex = null; // Reset index after editing
    } else {
      // Add a new employee
      employeeList.push(newEmployee);
    }

    generateEmployees(); // Regenerate the table
    elEmployeeForm.reset(); // Clear the form
  });
}

addEmployee();

function deleteEmployee(index) {
  employeeList.splice(index, 1);
  generateEmployees(); // Regenerate the table after deletion
}

function editEmployee(index) {
  // Set the global editingEmployeeIndex to know which employee to update
  editingEmployeeIndex = index;

  const employee = employeeList[index];

  // Pre-fill the form with the selected employee's current details
  document.getElementById("First-Name-input").value = employee.firstName;
  document.getElementById("Last-Name-input").value = employee.lastName;
  document.getElementById("Age-input").value = employee.age;
  document.getElementById("Start-Date-input").value = employee.startDate;
  document.getElementById("Department-input").value = employee.department;
  document.getElementById("Salary-input").value = employee.salary;
}
