let id = 1

export const testPerson = (firstName, age, temperature) => {
    return {
        firstName,
        age,
        temperature,
        id: id++
    }
}
