import fs from 'fs'

const input = fs.readFileSync('./day2/input.txt','utf-8').split('\n')

const gameResultPoints = {
    "A Z": 0,
    "B X": 0,
    "C Y": 0,
    "C X": 6,
    "A Y": 6,
    "B Z": 6,
    "A X": 3,
    "C Z": 3,
    "B Y": 3
}

const selectedShapePoints = {
    "Z": 3,
    "Y": 2,
    "X": 1
}

let pointsTotal = 0

input.forEach(line => {
    const points = gameResultPoints[line]
    const shapePoint = selectedShapePoints[line[2]]

    pointsTotal += (points + shapePoint)
})

console.log(pointsTotal)