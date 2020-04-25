// Imports go first
import { testPerson } from "./TestFacility.js"
import { diganose, usePatients } from "./Clinic.js"
import { PatientList } from "./PatientList.js"



// Test 5 people at the testing facility
let doug = testPerson("Doug", 65, 102)
let mary = testPerson("Mary", 37, 100)
let candace = testPerson("Candace", 42, 103)


// Diagnose each person at the clinic
doug = diganose(doug, 4)
mary = diganose(mary, 2)
candace = diganose(candace, 2)

const patients = usePatients()
console.log(patients)


// Invoke the component function that renders the HTML list of patients
PatientList()
