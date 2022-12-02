import fs from 'fs'

const input = fs.readFileSync('./day2/input.txt','utf-8').split('\n')

const gameResultPoints = {
    "A A": 3,
    "A B": 6,
    "A C": 0,
    "B A": 0,
    "B B": 3,
    "B C": 6,
    "C A": 6,
    "C B": 0,
    "C C": 3
}

const selectedShapePoints = {
    "A": 1,
    "B": 2,
    "C": 3
}

const rulesToWin = {
    "X": 0,
    "Y": 3,
    "Z": 6
}

let pointsTotal = 0

input.forEach(line => {
    const gameChange = line[2]
    const enemyChoice = line[0]

    for (const key in gameResultPoints) {
        if(gameResultPoints[key] === rulesToWin[gameChange] && key[0] === enemyChoice){
            const pointOfMyChoice = selectedShapePoints[key[2]]
            pointsTotal += (pointOfMyChoice + rulesToWin[gameChange])
        }
    }
})

console.log(pointsTotal)