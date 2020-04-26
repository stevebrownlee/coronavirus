import { testPerson } from "../src/scripts/TestFacility.js"
import { diganose } from "../src/scripts/Clinic.js"


let person = null

describe('Person is tested and has an identifier', () => {
    beforeAll(() => {
        person = testPerson("Doug", 65, 102)
        person = diganose(person, 4)
    })

    test('Person has correct properties', () => {
        expect( person )
            .toMatchObject(
                { firstName: "Doug", age: 65, temperature: 102, id: 1 }
            )
    })
})

describe('Testing a patient with infected conditions', () => {
    beforeAll(() => {
        person = testPerson("Doug", 65, 102)
        person = diganose(person, 4)
    })

    test('Person is diagnosed', () => {
        expect(person.diagnosed).toBe(true)
    })

    test('Person is infected when temperature and symptomatic days are too high', () => {
        expect(person.infected).toBe(true)
    })
})

describe('Testing a patient with high temperature but not symptomatic long enough', () => {
    beforeAll(() => {
        person = testPerson("Doug", 65, 102)
        person = diganose(person, 2)
    })

    test('Person is diagnosed', () => {
        expect(person.diagnosed).toBe(true)
    })

    test('Person is not infected when days are too few', () => {
        expect(person.infected).toBe(false)
    })
})

const puppeteer = require("puppeteer")

test('Patients are rendered to DOM', async () => {
    let doug = testPerson("Doug", 65, 102)
    let mary = testPerson("Mary", 37, 100)
    let candace = testPerson("Candace", 42, 103)

    doug = diganose(doug, 4)
    mary = diganose(mary, 2)
    candace = diganose(candace, 2)

    let browser = await puppeteer.launch({
        headless: true
    })
    const page = await browser.newPage();
    await page.goto('http://localhost:8080');
    await page.waitForSelector('.patient')

    let section = await page.$eval('.patients', _ => _.innerHTML)

    section = section.replace(/\n/g, "")
    section = section.replace(/\s{2,}/g, "")

    try {
        expect(section).toBe(`<section class="patient" id="patient--1"><h2 class="patient__name">Doug</h2><div class="patient__properties"><p>Age: 65</p><p>Temperature: 102</p><p>Diagnosed: true</p></div><div class="patient_diagnosis">Infected: true</div></section><section class="patient" id="patient--2"><h2 class="patient__name">Mary</h2><div class="patient__properties"><p>Age: 37</p><p>Temperature: 100</p><p>Diagnosed: true</p></div><div class="patient_diagnosis">Infected: false</div></section><section class="patient" id="patient--3"><h2 class="patient__name">Candace</h2><div class="patient__properties"><p>Age: 42</p><p>Temperature: 103</p><p>Diagnosed: true</p></div><div class="patient_diagnosis">Infected: false</div></section>`);
    }
    catch (error) {
        throw error
    }
    finally {
        browser.close()
    }

})

