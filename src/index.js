import {Request} from "./request";
import {UI} from "./ui";
 
// değişkenleri seçme işlemi
const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

const request = new Request("http://localhost:3000/employees");
const ui = new UI();

let updateStatus = null;

eventListeners();

function eventListeners(){
    document.addEventListener("DOMContentLoaded",getAllEmployees);
    form.addEventListener("submit",addEmployee);
    employeesList.addEventListener("click",UpdateOrDelete);
    updateEmployeeButton.addEventListener("click",updateEmployee);
}

function getAllEmployees(){
    request.get()
    .then(employee => {
        ui.addAllEmployeeToUI(employee)
    })
    .catch(err => console.log(err));
}

function addEmployee(e){
    const employeeName = nameInput.value.trim();
    const employeeDepartment = departmentInput.value.trim();
    const employeeSalary = salaryInput.value.trim();


    if(employeeName === "" || employeeDepartment === "" || employeeSalary === ""){
        alert("Lütfen tüm alanarı doldurun");
    }else{
        request.post({name:employeeName,department:employeeDepartment,salary:employeeSalary})
        .then(employees => {
            ui.addEmployeeToUI(employees);
        })
        .catch(err => console.log(err));
    }

    ui.clearInputs();
    e.preventDefault();
}

function UpdateOrDelete(e){
    if(e.target.id === "delete-employee"){
        // Silme işlemi
        deleteEmployee(e.target);
    }
    else if(e.target.id === "update-employee"){
        // Güncelleme
        updateEmployeeController(e.target.parentElement.parentElement);
    }
}

function deleteEmployee(targetEmployee){
    const id = targetEmployee.parentElement.previousElementSibling.previousElementSibling.textContent;

    request.delete(id)
    .then(message => {
        ui.deleteEmployeeFromUI(targetEmployee.parentElement.parentElement);
    })
    .catch(err => console.log(err));
}
function updateEmployeeController(targetEmployee){
    ui.toggleUpdateButton(targetEmployee);

    if (updateStatus === null) {
        updateStatus = {
            updateId : targetEmployee.children[3].textContent,
            updateParent : targetEmployee
        }
    }
    else{
        updateStatus = null;
    }
}

function updateEmployee(){
    if(updateStatus){
        // Güncelleme
        const data = {name:nameInput.value.trim(),department:departmentInput.value.trim(),salary:salaryInput.value.trim()}

        request.put(updateStatus.updateId,data)
        .then(updateEmployee => {
            ui.updateEmployeeOnUI(updateEmployee,updateState.updateParent)

        })
        .catch(err => console.log(err));
    }
}




// request.get()
// .then(employees => console.log(employees))
// .catch(err => console.error(err));

// request.post({name:"Mehmet",department:"Finans",salary:3000})
// .then(employees => console.log(employees))
// .catch(err => console.log(err));

// request.put(3,{name:"ahmet",department:"dağıtım",salary:2500})
// .then(employees => console.log(employees))
// .catch(err => console.log(err));

// request.delete(6)
// .then(message => console.log(message))
// .catch(err => console.log(err));