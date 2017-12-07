class Human
{
    /**
     * @param name string
     * @param age int
     * @param dateOfBirth string
     */
    constructor(name, age, dateOfBirth)
    {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth
    }

    /**
     * Базовые данные по классу Human
     * @return {{name: *, age: *, date: *}}
     */
    displayInfo()
    {
        return {
            'name' : this.name,
            'age' : this.age,
            'date': this.dateOfBirth
        }
    }
}