class Company {
    constructor() {
        this.departments = [];  // Fixed typo
    }

    getDepart(name) {
        let department = this.departments.find(d => d.name === name);

        if (!department) {
            department = {
                name,
                employees: [],
                salaries: [],
                positions: []
            };
            this.departments.push(department);
        }
        return department;
    }

    getSalariesSum(department) {
        return department.salaries.reduce((a, b) => a + b, 0);  // Fixed typo
    }

    bestSalaryDepart() {
        return this.departments.length > 0
            ? this.departments.sort((a, b) =>
                (this.getSalariesSum(b) / b.salaries.length) - (this.getSalariesSum(a) / a.salaries.length)
            )[0]
            : null;
    }

    addEmployee(name, salary, position, departmentName) {
        if (!name || !position || !departmentName || salary < 0) {
            throw new Error('Invalid input!');
        }

        const department = this.getDepart(departmentName);
        department.employees.push(name);
        department.salaries.push(salary);
        department.positions.push(position);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const best = this.bestSalaryDepart();
        if (!best) {
            return "No departments available.";
        }

        const employeesData = best.employees
            .map((name, i) => [name, best.salaries[i], best.positions[i]])
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .map(entry => entry.join(' '))
            .join('\n');

        return `Best Department is: ${best.name}
Average salary: ${(this.getSalariesSum(best) / best.salaries.length).toFixed(2)}
${employeesData}`;
    }
}
