class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department)
    {
        super(name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }


    /**
     * Дополняет базовый displayInfo()
     * @return {{name: *, age: *, date: *, salary: *, department: *}}
     */
    displayInfo() {
        let info = super.displayInfo();
        info.salary = this.salary;
        info.department = this.department;
        return info;
    }
}