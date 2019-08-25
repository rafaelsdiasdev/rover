// Rover Object Goes Here

// ======================
let rover = {
  direction: "N",
  name: "rover",
  x: 0,
  y: 0,
  travelLog: [
    [0, 0]
  ]
}

// ======================

let trover = {
  direction: "N",
  name: "trover",
  x: 9,
  y: 9,
  travelLog: [
    [9, 9]
  ]
}
// Troca de Rovers
let select = rover

function selectRover() {
  if (select === rover) {
    select = trover
    console.log(`Select: ${select.name}`)
  }else{
    select = rover
    console.log(`Select: ${select.name}`)
  }
  grid[select.x][select.y] = "-"
}
  

// ======================

// GRID
let grid = []
for (let i = 0; i < 10; i++) {
  let arrLine = []
  for (let j = 0; j < 10; j++) {
    arrLine.push("-")
  }
  grid.push(arrLine)
}

// ======================

// Obstaculo
grid[5][3] = "O"
grid[4][8] = "O"
grid[2][1] = "O"
grid[7][5] = "O"
grid[2][6] = "O"

function obstacle(select) {
  switch (select.direction) {
    case "N":
      select.x = select.x + 1
      break
    case "E":
      select.y = select.y - 1
      break
    case "S":
      select.x = select.x - 1
      break
    case "W":
      select.y = select.y + 1
      break
  }
}

// ======================

// Limites

function limits(select) {
  switch (select.direction) {
    case "N":
      select.x = select.x + 1
      break
    case "E":
      select.y = select.y - 1
      break
    case "S":
      select.x = select.x - 1
      break
    case "W":
      select.y = select.y + 1
      break
  }
}

// ======================

// Virar a esquerda
function turnLeft(select) {
  if (select.direction === "N") {
    select.direction = "W"
  } else if (select.direction === "W") {
    select.direction = "S"
  } else if (select.direction === "S") {
    select.direction = "E"
  } else if (select.direction === "E") {
    select.direction = "N"
  }
  console.log("turnLeft was called!")
  console.log(`${select.name} direction ${select.direction}`)
}

// ======================

// Virar a direita
function turnRight(select) {
  if (select.direction === "N") {
    select.direction = "E"
  } else if (select.direction === "E") {
    select.direction = "S"
  } else if (select.direction === "S") {
    select.direction = "W"
  } else if (select.direction === "W") {
    select.direction = "N"
  }
  console.log("turnRight was called!")
  console.log(`${select.name} direction ${select.direction}`)
}

// ======================



// Movimentar para frente
function moveForward(select) {
  if (select.y >= 0 && select.y <= 9 && select.x >= 0 && select.x <= 10) {
    switch (select.direction) {
      case "N":
        console.log(`${select.name} is facing North`)
        select.x--
        if (select.x === -1 || select.x === 10) {
          limits(select)
          console.log("There's nothing here!")
        } else if (select.x === 7 && select.y === 5 || select.x === 5 && select.y === 3 ||
          select.x === 4 && select.y === 8 || select.x === 2 && select.y === 1 || select.x === 2 && select.y === 6) {
          obstacle(select)
          console.log("Impossible movement! Obstacle!")
        } else {
          console.log("moveForward was called")
        }
        console.log(`${select.name} position: x: ${select.x} y: ${select.y}`)
        break
      case "E":
        console.log(`${select.name} is facing East`)
        select.y++
        if (select.x === -1 || select.x === 10) {
          limits(select)
          console.log("There's nothing here!")
        } else if (select.x === 7 && select.y === 5 || select.x === 5 && select.y === 3 ||
          select.x === 4 && select.y === 8 || select.x === 2 && select.y === 1 || select.x === 2 && select.y === 6) {
          obstacle(select)
          console.log("Impossible movement! Obstacle!")
        } else {
          console.log("moveForward was called")
        }
        console.log(`${select.name} position: x: ${select.x} y: ${select.y}`)
        break
      case "S":
        console.log(`${select.name} is facing South`)
        select.x++
        if (select.x === -1 || select.x === 10) {
          limits(select)
          console.log("There's nothing here!")
        } else if (select.x === 7 && select.y === 5 || select.x === 5 && select.y === 3 ||
          select.x === 4 && select.y === 8 || select.x === 2 && select.y === 1 || select.x === 2 && select.y === 6) {
          obstacle(select)
          console.log("Impossible movement! Obstacle!")
        } else {
          console.log("moveForward was called")
        }
        console.log(`${select.name} position: x: ${select.x} y: ${select.y}`)
        break
      case "W":
        console.log(`${select.name} is facing West`)
        select.y--
        if (select.x === -1 || select.x === 10) {
          limits(select)
          console.log("There's nothing here!")
        } else if (select.x === 7 && select.y === 5 || select.x === 5 && select.y === 3 ||
          select.x === 4 && select.y === 8 || select.x === 2 && select.y === 1 || select.x === 2 && select.y === 6) {
          obstacle(select)
          console.log("Impossible movement! Obstacle!")
        } else {
          console.log("moveForward was called")
        }
        console.log(`${select.name} position: x: ${select.x} y: ${select.y}`)
        break
    }
    select.travelLog.push([select.x, select.y])
  }
}

// ======================

// Movimentar para trás
function moveBackwards(select) {
  if (select.y >= 0 && select.y <= 9 && select.x >= 0 && select.x <= 10) {
    switch (select.direction) {
      case "N":
        console.log(`${select.name} is facing North`)
        select.x++
        if (select.x === -1 || select.x === 10) {
          !limits(select)
          console.log("There's nothing here!")
        } else if (select.x === 7 && select.y === 5 || select.x === 5 && select.y === 3 ||
          select.x === 4 && select.y === 8 || select.x === 2 && select.y === 1 || select.x === 2 && select.y === 6) {
          !obstacle(select)
          console.log("Impossible movement! Obstacle!")
        } else {
          console.log("moveForward was called")
        }
        console.log(`${select.name} position: x: ${select.x} y: ${select.y}`)
        break
      case "E":
        console.log(`${select.name} is facing East`)
        select.y--
        if (select.x === -1 || select.x === 10) {
          !limits(select)
          console.log("There's nothing here!")
        } else if (select.x === 7 && select.y === 5 || select.x === 5 && select.y === 3 ||
          select.x === 4 && select.y === 8 || select.x === 2 && select.y === 1 || select.x === 2 && select.y === 6) {
          !obstacle(select)
          console.log("Impossible movement! Obstacle!")
        } else {
          console.log("moveForward was called")
        }
        console.log(`${select.name} position: x: ${select.x} y: ${select.y}`)
        break
      case "S":
        console.log(`${select.name} is facing South`)
        select.x--
        if (select.x === -1 || select.x === 10) {
          !limits(select)
          console.log("There's nothing here!")
        } else if (select.x === 7 && select.y === 5 || select.x === 5 && select.y === 3 ||
          select.x === 4 && select.y === 8 || select.x === 2 && select.y === 1 || select.x === 2 && select.y === 6) {
          !obstacle(select)
          console.log("Impossible movement! Obstacle!")
        } else {
          console.log("moveForward was called")
        }
        console.log(`${select.name} position: x: ${select.x} y: ${select.y}`)
        break
      case "W":
        console.log(`${select.name} is facing West`)
        select.y++
        if (select.x === -1 || select.x === 10) {
          !limits(select)
          console.log("There's nothing here!")
        } else if (select.x === 7 && select.y === 5 || select.x === 5 && select.y === 3 ||
          select.x === 4 && select.y === 8 || select.x === 2 && select.y === 1 || select.x === 2 && select.y === 6) {
          !obstacle(select)
          console.log("Impossible movement! Obstacle!")
        } else {
          console.log("moveForward was called")
        }
        console.log(`${select.name} position: x: ${select.x} y: ${select.y}`)
        break
    }
    select.travelLog.push([select.x, select.y])
  }
}

// ======================

// Lista de comandos
function listCommands(listString, select) {
  for (let i = 0; i < listString.length; i++) {
    if (listString[i] === 'r') {
      turnRight(select)
    } else if (listString[i] === 'l') {
      turnLeft(select)
    } else if (listString[i] === 'f') {
      moveForward(select)
    } else if (listString[i] === 'b') {
      moveBackwards(select)
    } else {
      console.log("command invalid!")
    }
  }
  grid[rover.x][rover.y] = "R"
  grid[trover.x][trover.y] = "T"
}

// ======================


console.log(`Select: ${select.name}`)
console.log(`${select.name} direction ${select.direction}`)

listCommands('rffffflbrflb', select)
selectRover()
listCommands('ffflff', select)
selectRover()
listCommands('rff', select)


console.log(grid.join("\n"))


