import fs from 'fs'

const input = fs.readFileSync('./day4/input.txt', 'utf-8').split('\n')

let sectionsHaveFullyContain = 0

input.forEach((line) => {
    const firstSection = line.split(',')[0].split('-')
    const secondSection = line.split(',')[1].split('-')

    console.log({firstSection, secondSection})

    let firstSectionIsIn = 0

    firstSection.forEach((id)=>{
        if(Number(id) >= Number(secondSection[0]) && Number(id) <= Number(secondSection[1])){
            firstSectionIsIn += 1
        }
    })

    if(firstSectionIsIn > 0){
        sectionsHaveFullyContain += 1
        return
    }

    let secondSectionIsIn = 0

    secondSection.forEach((id)=>{
        if(Number(id) >= Number(firstSection[0]) && Number(id) <= Number(firstSection[1])){
            secondSectionIsIn += 1
        }
    })

    if(secondSectionIsIn > 0){
        sectionsHaveFullyContain += 1
        return
    }
})

console.log(sectionsHaveFullyContain)