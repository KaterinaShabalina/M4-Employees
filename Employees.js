
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

// function compareEmployees (employee1, employee2){
// if 

for(let x in employee1.companies && employee2.companies){
console.log(employee1.companies[x] && employee2.companies[x]);
}
