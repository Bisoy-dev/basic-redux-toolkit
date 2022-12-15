export default class EmployeeService{
    static employees = [
        {
            id : 1,
            name : 'John Doe',
            username : 'johndoe',
            email : 'johndoe@gmail.com',
            isSelected : false
        },
        {
            id : 2,
            name : 'Bill Gate',
            username : 'billgate',
            email : 'billgate@gmail.com',
            isSelected : false
        },
        {
            id : 3, 
            name : 'Steve Jobs',
            username : 'stevejobs',
            email : 'stevejobs@gmail.com',
            isSelected : false
        },
        {
            id : 4, 
            name : 'Mark Zuckerberg',
            username : 'mark123',
            email : 'mark@gmail.com',
            isSelected : false
        },
        {
            id : 5,
            name : 'Jane Doe',
            username : 'janedoe',
            email : 'janedoe@gmail.com',
            isSelected : false
        },
        {
            id : 6,
            name : 'Bob Smith',
            username : 'bob',
            email : 'bobsmith@gmail.com',
            isSelected : false
        }
    ]


    static getAll = () => this.employees
}