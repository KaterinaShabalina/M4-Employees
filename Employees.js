
const employee1 = {
    name: "Ben",
    surname: "Smith",
    age: 39,
    companies: ["apple", "google", "twitter"]
}

const employee2 = {
    name: "Zoe",
    surname: "Leto",
    age: 28,
    companies: ["Meta", "VK"]
}

function compareEmployees(employee1, employee2) {
    if (employee1.companies.length > employee2.companies.length){
        console.log(employee1.name)
        for(let i in employee1.companies){
            console.log( employee1.companies[i])
        }
    } else if (employee2.companies.length > employee1.companies.length){
        console.log(employee2.name)
        for(let i in employee2.companies){
            console.log( employee2.companies[i])
        }
    } else {
        console.log(employee1.name)
        console.log(employee2.name)
    }
}

compareEmployees(employee1, employee2)
