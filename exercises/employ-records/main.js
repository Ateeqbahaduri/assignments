// var employee1 = {
//     name: "Qudos",
//     jobTitle: "Naswar-frosh",
//     Salary: "39$/hr",
//     Status: "full-time"
// }
// var employee2 = {
//     name: "Khapri",
//     jobTitle: "keesa-maal",
//     Salary: "14$/hr",
//     Status: "full-time"
// }
// var employee3 = {
//     name: "Shafiq",
//     jobTitle: "Web-developer",
//     Salary: "99$/hr",
//     Status: "part-time"
// }
// var employee4 = {
//     name: "Gulkhai",
//     jobTitle: "Gopaak",
//     Salary: "11$/hr",
//     status: "full-time"
// }
// var employee5 = {
//     name: "mangal",
//     jobTitle: "Sag-shoy",
//     Salary: "15$/hr",
//     status:"full-time"
// }

function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployForm = function (){
        console.log("name: " + this.name, "salary: " +this.salary, "Job-Title: " + this.jobTitle);
    }

    this.changeName = function (newName) {
        this.name = "";
        
    }
}
var employee1 = new Employee("Qudos", "naswarfrosh", "9/hr", "part-time");
var employee2 = new Employee("shafiq", "web-developer", "10/hr", "part-time");
var employee3 = new Employee("ali", "shagerd", "20/week", "part-time");
var employee5 = new Employee("shampal", "gopaak", "10/hr", "full-time");

// function printEmployForm(name, jobTitle, Salary, Status) {
//     let printEmployForm = print.employeeForm(name, jobTitle, Salary, status);

// }
employee5.printEmployForm();
employee3.changeName("khampal");