function slove() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salrary = 0;
            this.task = [];
        }

        get salary(){
            this._salary
        }
        set salary(salary){
            this._salary = salary;
        }


        work() {
            const currentTask = this.task.shift();
            console.log(currentTask);
            this.task.push(currentTask);

        }

        cllectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Junior extends Employee{
        constructor(name, age){
            super(name, age);
            this.task = [`${this.name} is working on a simple task.`]
        }
    }

    class Seenior extends Employee{
        constructor(name, age){
            super(name, age);
            this.task = [`
                ${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`,

            ]
        }
       
            cllectSalary() {
                console.log(`${this.name} received ${this.salary} this month.`);
            }
         
    }

    class Manager extends Employee{
        constructor(name, age){
            super(name, age);
            this.task = [
                `${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`
            ]
        }

    }

    return{
        Employee,
        Junior,
        Seenior,
        Manager
    }
}
