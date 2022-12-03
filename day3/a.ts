import fs from 'fs'

const input = fs.readFileSync('./day3/input.txt', 'utf-8').split('\n')

const itemsRepeat: string[] = []

input.forEach((line) => {
    const halfLength = line.length / 2

    const firstCompartment = line.slice(0, halfLength)
    const secondCompartment = line.slice(halfLength)

    const firstItems = firstCompartment.split('')
    const secondItems = secondCompartment.split('')

    let findFirst = false

    firstItems.forEach(letter => {
        secondItems.forEach(secondLetter => {
            if (letter === secondLetter && !findFirst) {
                itemsRepeat.push(letter)
                findFirst = true
            }
        })
    })
})

let prioritiesTotal = 0

itemsRepeat.forEach(letter => {
    const char = letter.toLocaleUpperCase().charCodeAt(0)

    if (letter[0] === letter[0].toUpperCase()) {
        console.log(`The item ${letter[0]} are UPPERCASE and value ${(char - 64) + 26}`)
        prioritiesTotal += ((char - 64) + 26)
    }
    if (letter[0] === letter[0].toLowerCase()) {
        console.log(`The item ${letter[0]} are LOWERCASE and value ${(char - 64)}`)
        prioritiesTotal += (char - 64)
    }
})

console.log(prioritiesTotal)