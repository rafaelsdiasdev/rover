// Rover Object Goes Here

let rover = {
  direction: "N",
  name: "rover",
  x: 0,
  y: 0,
  path: [
    [0, 0]
  ]
}

let trover = {
  direction: "N",
  name: "trover",
  x: 9,
  y: 9,
  path: [
    [9, 9]
  ]
}

// Rovers swap
let selected = rover

function selectedRover() {
  if (selected === rover) {
    selected = trover
    grid[selected.x][selected.y] = "T"
    console.log(`selected: ${selected.name}`)
    console.log(`${selected.name} direction ${selected.direction}`)
  } else {
    selected = rover
    grid[selected.x][selected.y] = "R"
    console.log(`selected: ${selected.name}`)
    console.log(`${selected.name} direction ${selected.direction}`)
  }
  grid[selected.x][selected.y] = "-"
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

// Obstacle
grid[5][3] = "O"
grid[4][8] = "O"
grid[2][1] = "O"
grid[7][5] = "O"
grid[2][6] = "O"

// ======================

// ======================

// Turn Left
function turnLeft(selected) {
  if (selected.direction === "N") {
    selected.direction = "W"
  } else if (selected.direction === "W") {
    selected.direction = "S"
  } else if (selected.direction === "S") {
    selected.direction = "E"
  } else if (selected.direction === "E") {
    selected.direction = "N"
  }
  console.log("turnLeft was called!")
  console.log(`${selected.name} direction ${selected.direction}`)
}

// ======================

// Turn Right
function turnRight(selected) {
  if (selected.direction === "N") {
    selected.direction = "E"
  } else if (selected.direction === "E") {
    selected.direction = "S"
  } else if (selected.direction === "S") {
    selected.direction = "W"
  } else if (selected.direction === "W") {
    selected.direction = "N"
  }
  console.log("turnRight was called!")
  console.log(`${selected.name} direction ${selected.direction}`)
}

// ======================

// Move Forward
function moveForward(selected) {
  if (selected.x >= 0 && selected.x < 10 && selected.y >= 0 && selected.y < 10) {
    switch (selected.direction) {
      case "N":
        console.log(`${selected.name} is facing North`)
        if (selected.x - 1 < 0) {
          console.log("There's nothing here")
        } else if (grid[selected.x - 1][selected.y] === "O") {
          console.log("Impossible movement! Obstacle!")
        } else if (grid[selected.x - 1][selected.y] === "R" || grid[selected.x - 1][selected.y] === "T") {
          console.log("be careful!")
        } else {
          selected.x--
          console.log("moveForward was called")
        }
        console.log(`${selected.name} position: x: ${selected.x} y: ${selected.y}`)
        break
      case "E":
        console.log(`${selected.name} is facing East`)
        if (selected.y + 1 > 9) {
          console.log("There's nothing here")
        } else if (grid[selected.x][selected.y + 1] === "O") {
          console.log("Impossible movement! Obstacle!")
        } else if (grid[selected.x][selected.y + 1] === "R" || grid[selected.x][selected.y + 1] === "T") {
          console.log("be careful!")
        } else {
          selected.y++
          console.log("moveForward was called")
        }
        console.log(`${selected.name} position: x: ${selected.x} y: ${selected.y}`)
        break
      case "S":
        console.log(`${selected.name} is facing South`)
        if (selected.x + 1 > 9) {
          console.log("There's nothing hereeee")
        } else if (grid[selected.x + 1][selected.y] === "O") {
          console.log("Impossible movement! Obstacle!")
        } else if (grid[selected.x + 1][selected.y] === "R" || grid[selected.x + 1][selected.y] === "T") {
          console.log("be careful!")
        } else {
          selected.x++
          console.log("moveForward was called")
        }
        console.log(`${selected.name} position: x: ${selected.x} y: ${selected.y}`)
        break
      case "W":
        console.log(`${selected.name} is facing West`)
        if (selected.y - 1 < 0) {
          console.log("There's nothing here")
        } else if (grid[selected.x][selected.y - 1] === "O") {
          console.log("Impossible movement! Obstacle!")
        } else if (grid[selected.x][selected.y - 1] === "R" || grid[selected.x][selected.y - 1] === "T") {
          console.log("be careful!")
        } else {
          selected.y--
          console.log("moveForwaaard was called")
        }
        console.log(`${selected.name} position: x: ${selected.x} y: ${selected.y}`)
        break
    }
    selected.path.push([selected.x, selected.y])
  }
}

// ======================

// Move Backwards
function moveBackwards(selected) {
  if (selected.x >= 0 && selected.x < 10 && selected.y >= 0 && selected.y < 10) {
    switch (selected.direction) {
      case "N":
        console.log(`${selected.name} is facing North`)
        if (selected.x + 1 > 10) {
          console.log("There's nothing here")
        } else if (grid[selected.x + 1][selected.y] === "O") {
          console.log("Impossible movement! Obstacle!")
        } else if (grid[selected.x + 1][selected.y] === "R" || grid[selected.x + 1][selected.y] === "T") {
          selected.x++
          console.log("be careful!")
        } else {
          console.log("moveForward was called")
        }
        console.log(`${selected.name} position: x: ${selected.x} y: ${selected.y}`)
        break
      case "E":
        console.log(`${selected.name} is facing East`)
        if (selected.y - 1 < 0) {
          console.log("There's nothing here")
        } else if (grid[selected.x][selected.y - 1] === "O") {
          console.log("Impossible movement! Obstacle!")
        } else if (grid[selected.x][selected.y - 1] === "R" || grid[selected.x][selected.y - 1] === "T") {
          console.log("be careful!")
        } else {
          selected.y--
          console.log("moveForward was called")
        }
        console.log(`${selected.name} position: x: ${selected.x} y: ${selected.y}`)
        break
      case "S":
        console.log(`${selected.name} is facing South`)
        if (selected.x + 1 < 10) {
          console.log("There's nothing here")
        } else if (grid[selected.x][selected.y] === "O") {
          console.log("Impossible movement! Obstacle!")
        } else if (grid[selected.x + 1][selected.y] === "R" || grid[selected.x - 1][selected.y] === "T") {
          console.log("be careful!")
        } else {
          selected.x++
          console.log("moveForward was called")
        }
        console.log(`${selected.name} position: x: ${selected.x} y: ${selected.y}`)
        break
      case "W":
        console.log(`${selected.name} is facing West`)
        if (selected.y + 1 > 9) {
          console.log("There's nothing here")
        } else if (grid[selected.x][selected.y] === "O") {
          console.log(grid[selected.x][selected.y])
          console.log("Impossible movement! Obstacle!")
        } else if (grid[selected.x][selected.y + 1] === "R" || grid[selected.x + 1][selected.y] === "T") {
          console.log("be careful!")
        } else {
          selected.y++
          console.log("moveForward was called")
        }
        console.log(`${selected.name} position: x: ${selected.x} y: ${selected.y}`)
        break
    }
    selected.path.push([selected.x, selected.y])
  }
}

// ======================

// List Commands
function listCommands(travelLog, selected) {
  for (let i = 0; i < travelLog.length; i++) {
    if (travelLog[i] === 'r') {
      turnRight(selected)
    } else if (travelLog[i] === 'l') {
      turnLeft(selected)
    } else if (travelLog[i] === 'f') {
      moveForward(selected)
    } else if (travelLog[i] === 'b') {
      moveBackwards(selected)
    } else {
      console.log("command invalid!")
    }
  }
  grid[rover.x][rover.y] = "R"
  grid[trover.x][trover.y] = "T"
}

// ======================

console.log(`selected: ${selected.name}`)
console.log(`${selected.name} direction ${selected.direction}`)

listCommands('rffffffrff', selected)
selectedRover()
listCommands('fffffffflfff', selected)
// selectedRover()

console.log(grid.join("\n"))