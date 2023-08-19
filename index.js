const employee= {name:"alex", streetaddress:"81 misty lane"}
//
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const copyOfEmployee= {...employee}
    copyOfEmployee[key] = value;
    return copyOfEmployee
}
const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key]
    return employee
 }
 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {  
    const copyOfEmployee= {...employee}
    delete copyOfEmployee[key]
    return copyOfEmployee
}
