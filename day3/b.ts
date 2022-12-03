import fs from 'fs'

const input = fs.readFileSync('./day3/input.txt', 'utf-8').split('\n')

const badges: string[] = []

for (let i = 0; i < input.length; i += 3) {
    const firstRucksackItems = input[i].split('')
    const secondRucksackItems = input[i + 1].split('')
    const thirdRucksackItems = input[i + 2].split('')

    let findedBadge = false

    firstRucksackItems.forEach(item => {
        const findInSecond = secondRucksackItems.find(secondItem => secondItem === item)
        const findInThird = thirdRucksackItems.find(secondItem => secondItem === item)

        if(findInSecond && findInThird && !findedBadge){
            findedBadge = true
            badges.push(item)
        }
    })
}

let prioritiesTotal = 0

badges.forEach(letter => {
    const char = letter.toLocaleUpperCase().charCodeAt(0)

    if (letter[0] === letter[0].toUpperCase()) {
        prioritiesTotal += ((char - 64) + 26)
    }
    if (letter[0] === letter[0].toLowerCase()) {
        prioritiesTotal += (char - 64)
    }
})

console.log(prioritiesTotal)