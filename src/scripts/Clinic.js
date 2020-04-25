const testedPatients = []

export const usePatients = () => testedPatients.slice()

export const diganose = (person, days) => {
    person.diagnosed = true

    if (person.temperature > 101 && days >= 4) {
        person.infected = true
    }
    else {
        person.infected = false
    }
    testedPatients.push(person)

    return person
}