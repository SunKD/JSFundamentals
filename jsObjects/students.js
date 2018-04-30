// Challenge 1
// Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

let students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
];

function printStudent(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("Name: " + students[i].name + ", cohort: " +students[i].cohort);
    }
}

// expcted result 
// Name: Remy, Cohort: Jan
// Name: Genevieve, Cohort: March
// Name: Chuck, Cohort: Jan
// Name: Osmund, Cohort: June
// Name: Nikki, Cohort: June
// Name: Boris, Cohort: June



// Challenge 2
// Write a function that accepts an object of users divided into employees and managers, as shown below, and logs the information to the console.
let users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};

function divideEmployeeManager(arr){
    let count = 0;
    let pepcount = 1;
    for(let item in arr){
        console.log(item.toUpperCase());
        for(let i = 0; i < arr[item].length; i++){
            count += arr[item][i].first_name.length + arr[item][i].last_name.length;
            console.log(pepcount + " - " + arr[item][i].first_name.toUpperCase()
                    + ", " + arr[item][i].last_name.toUpperCase() +" - " + count);
            count = 0;
            pepcount++;
        }
        
        pepcount = 1;
    }
}

// expcted result 
// EMPLOYEES
// 1 - JONES, MIGUEL - 11
// 2 - BERTSON, ERNIE - 12
// 3 - LU, NORA - 6
// 4 - BARKYOUMB, SALLY - 14
// MANAGERS
// 1 - CHAMBERS, LILLIAN - 15
// 2 - POE, GORDON - 9