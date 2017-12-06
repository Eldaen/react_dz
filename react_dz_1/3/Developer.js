class Developer extends Employee
{


    constructor(name, age, dateOfBirth, salary, department, manager)
    {
        super(name, age, dateOfBirth, salary, department);
        this.manager = manager;
        //рандомная строка длинной в 5 символов
        this.id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    }

    /**
     * Есди передали менеджера, то меняет менеджера
     * @param manager intance of Manager
     * @return Manager|null
     */
    changeManager(manager)
    {
        if(manager instanceof Manager)
        {
           return this.manager = manager;
        } else {
           return null;
        }
    }
}