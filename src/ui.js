export class UI{
    constructor(){
        this.employeesList = document.getElementById("employees");
        this.updateButton = document.getElementById("update");
        this.nameInput = document.getElementById("name");
        this.departmentInput = document.getElementById("department");
        this.salaryInput = document.getElementById("salary");
    }

    addAllEmployeeToUI(employees){
        // <tr>
                                            
        //     <td>Mustafa Murat Coşkun</td>
        //     <td>Bilişim</td>
        //     <td>4000</td>
        //     <td>1</td>
        //     <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        //     <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        // </tr>

        let result = "";
        employees.forEach(employee => {
            result += `
            <tr>                           
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>
            `
        });
        this.employeesList.innerHTML = result;
    }

    clearInputs(){
        this.nameInput.value = "";
        this.departmentInput.value = "";
        this.salaryInput.value = "";

    }

    addEmployeeToUI(employee){
        this.employeesList.innerHTML += `
        <tr>                           
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>
        `;
    }
    deleteEmployeeFromUI(elemnt){
        element.remove();
    }

    toggleUpdateButton(target){
        if(this.updateButton.style.display === "none"){
            this.updateButton.style.display = "block";
            this.addEmployeeInfoToIputs(target);
        }
        else{
            this.updateButton.style.display = "none";
            this.clearInputs();
        }
    }
    addEmployeeInfoToIputs(target){
        const children = target.children;

        this.nameInput.value = children[0].textContent;
        this.departmentInput = children[1].textContent;
        this.salaryInput = children[2].textContent;
    }
    updateEmployeOnUI(employee,parent) {
        parent.innerHTML = `
        <tr>                           
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>
        `;
        this.clearInputs();
    }
} 