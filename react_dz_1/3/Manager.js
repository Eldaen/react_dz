class Manager extends Employee
{


    constructor(name, age, dateOfBirth, salary, department)
    {
        super(name, age, dateOfBirth, salary, department);
        this.developers =
            [
                new Developer('Вася', 25, '5-1-1989, 20000', 'backend'),
                new Developer('Петя', 26, '6-2-1989, 20000', 'backend'),
                new Developer('Федя', 27, '7-3-1989, 20000', 'backend'),
                new Developer('Мища', 28, '8-4-1989, 20000', 'backend')
            ];
        this.formDevIndex();
    }

    /**
     * добавляет нового разработчика
     * @param developer
     * @return Developer|null
     */
    addDev(developer)
    {
        if(developer instanceof Developer)
        {
            return this.developers[developer.id] = developer;
        } else {
            return null;
        }
    }

    /**
     * Удаляет разработчика по его хэшу
     * @param id
     * @return boolean
     */
    removeDev(id)
    {
        if(this.developers['id'])
        {
            return delete this.developers['id']
        } else {
            return false;
        }
    }

    /**
     * формирует список разработчиком в стиле {'hash' : {}}
     */
    formDevIndex()
    {
        let index = {};
        let len = this.developers.length;
        for (let i = 0; i < len; i++)
        {
            let id = this.developers[i].id;
            index[id] = this.developers[i];
        }
        this.developers = index;
    }

}
