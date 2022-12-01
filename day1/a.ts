import fs from 'fs'

const input = fs.readFileSync('./day1/input.txt','utf-8').split('\n')

const elfsCalories: number[] = []
let actualCalorieSum = 0

input.forEach(line => {
    if(line.length <= 0){
        elfsCalories.push(actualCalorieSum)
        return actualCalorieSum = 0
    }else{
        actualCalorieSum += Number(line)
    }
})

elfsCalories.sort((a, b)=>{
    if(a > b) return -1
    if(a < b) return 1
    return 0
})

console.log(elfsCalories.shift())