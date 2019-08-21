// Rover Object Goes Here

// ======================
// let rover = {
//   [rover1: {
//     direction: "N",
//     x: 0,
//     y: 0,
//     travelLog: [{x: 0,y: 0}]
//   },
//   rover2: {
//     direction: "N",
//     x: 10,
//     y: 10,
//     traverLog: [{x: 10,y: 10}]
//   }]
// }

let rover = {
    direction: "N",
    x: 0,
    y: 0,
    // travelLog: [{x: 0,y: 0}],
    travelLog: [[0,0]]
  }
  
  // GRID
  let grid = []
  for (let i = 0; i < 10; i++){
    let arrLine = []
    for (let j = 0; j < 10; j++){
      arrLine.push("-")
    }
    grid.push(arrLine)
  }
  
  grid[5][3] = "O"
  grid[4][8] = "O"
  grid[2][1] = "O"
  grid[7][5] = "O"
  grid[2][6] = "O"
  
  // ======================
  
  // Virar a esquerda
  function turnLeft(rover){
    if (rover.direction === "N"){
      rover.direction = "W"
    } else if (rover.direction === "W"){
      rover.direction = "S"
    } else if (rover.direction === "S"){
      rover.direction = "E"
    } else if (rover.direction === "E"){
      rover.direction = "N"
    }
    console.log("turnLeft was called!")
  }
  
  // Virar a direita
  function turnRight(rover){
    if (rover.direction === "N"){
      rover.direction = "E"
    } else if (rover.direction === "E"){
      rover.direction = "S"
    } else if (rover.direction === "S"){
      rover.direction = "W"
    } else if (rover.direction === "W"){
      rover.direction = "N"
    }
    console.log("turnRight was called!")
  }
  
  // Movimentar para frente
  function moveForward(rover){
    if (rover.y >= 0 && rover.y <= 9 && rover.x >= 0 && rover.x <= 10) {
      switch (rover.direction){
        case "N":
          console.log("Rover is facing North")
          rover.x--
          if (rover.x === -1 || rover.x === 10){
            rover.x = rover.x+1
            console.log("There's nothing here!")
          } else if (rover.x === 7 && rover.y === 5 || rover.x === 5 && rover.y === 3 || rover.x === 4 && rover.y === 8 || rover.x === 2 && rover.y === 1 || rover.x === 2 && rover.y === 6){
            console.log("Impossible movement! Obstacle!")
            rover.x = rover.x+1 } else {
            console.log("moveForward was called")
          }
          console.log(`Rover position: x: ${rover.x} y: ${rover.y}`)
          break
        case "E":
          console.log("Rover is facing East")
          rover.y++
          if (rover.y === -1 || rover.y === 10){
            rover.y = rover.y-1
            console.log("There's nothing here!")
          } else if (rover.x === 7 && rover.y === 5 || rover.x === 5 && rover.y === 3 || rover.x === 4 && rover.y === 8 || rover.x === 2 && rover.y === 1 || rover.x === 2 && rover.y === 6){
            console.log("Impossible movement! Obstacle!")
            rover.y = rover.y-1
          } else {
            console.log("moveForward was called")
          }
          console.log(`Rover position: x: ${rover.x} y: ${rover.y}`)
          break
        case "S":
          console.log("Rover is facing South")
          rover.x++
         if (rover.x === -1 || rover.x === 10){
            rover.x = rover.y-1
            console.log("There's nothing here!")
          } else if (rover.x === 7 && rover.y === 5 || rover.x === 5 && rover.y === 3 || rover.x === 4 && rover.y === 8 || rover.x === 2 && rover.y === 1 || rover.x === 2 && rover.y === 6){
            console.log("Impossible movement! Obstacle!")
            rover.x = rover.x-1 } else {
            console.log("moveForward was called")
          }
          console.log(`Rover position: x: ${rover.x} y: ${rover.y}`)
          break
        case "W":
          console.log("Rover is facing West")
          rover.y--
          if (rover.y === -1 || rover.y === 10){
            rover.y = rover.y-1
            console.log("There's nothing here!")
          } else if (rover.x === 7 && rover.y === 5 || rover.x === 5 && rover.y === 3 || rover.x === 4 && rover.y === 8 || rover.x === 2 && rover.y === 1 || rover.x === 2 && rover.y === 6){
            console.log("Impossible movement! Obstacle!")
            rover.y = rover.y+1 } else {
            console.log("moveForward was called")
          }
          
          console.log(`Rover position: x: ${rover.x} y: ${rover.y}`)
          break
      }
      // let newPosition = {x: rover.x, y: rover.y}
      // rover.travelLog.push(newPosition)
      rover.travelLog.push([rover.x, rover.y])
    }
  }
  
  // Movimentar para trás
  function moveBackwards(rover){
    if (rover.y >= 0 && rover.y <= 9 && rover.x >= 0 && rover.x <= 10) { 
      switch (rover.direction){
        case "N":
          console.log("Rover is facing North")
          rover.x++
          if (rover.x === -1 || rover.x === 10){
            rover.x = rover.x-1
            console.log("There's nothing here!")
          } else if (rover.x === 7 && rover.y === 5 || rover.x === 5 && rover.y === 3 || rover.x === 4 && rover.y === 8 || rover.x === 2 && rover.y === 1 || rover.x === 2 && rover.y === 6){
            console.log("Impossible movement! Obstacle!")
            rover.x = rover.x-1 } else {
            console.log("moveForward was called")
          }
          console.log(`Rover position: x: ${rover.x} y: ${rover.y}`)
          break
        case "E":
          console.log("Rover is facing East")
          rover.y--
          if (rover.y === -1 || rover.x === 10){
            rover.y = rover.y+1
            console.log("There's nothing here!")
          } else if (rover.x === 7 && rover.y === 5 || rover.x === 5 && rover.y === 3 || rover.x === 4 && rover.y === 8 || rover.x === 2 && rover.y === 1 || rover.x === 2 && rover.y === 6){
            console.log("Impossible movement! Obstacle!")
            rover.y = rover.y+1 } else {
            console.log("moveForward was called")
          } 
          console.log(`Rover position: x: ${rover.x} y: ${rover.y}`)
          break
        case "S":
          console.log("Rover is facing South")
          rover.x--
          if (rover.x === -1 || rover.x === 10){
            rover.x = rover.x+1
            console.log("There's nothing here!")
          } else if (rover.x === 7 && rover.y === 5 || rover.x === 5 && rover.y === 3 || rover.x === 4 && rover.y === 8 || rover.x === 2 && rover.y === 1 || rover.x === 2 && rover.y === 6){
            console.log("Impossible movement! Obstacle!")
            rover.x = rover.x+1 } else {
            console.log("moveForward was called")
          } 
          console.log(`Rover position: x: ${rover.x} y: ${rover.y}`)
          break
        case "W":
          console.log("Rover is facing West")
          rover.y++
          if (rover.y === -1 || rover.y === 10){
            rover.y = rover.y-1
            console.log("There's nothing here!")
          } else if (rover.x === 7 && rover.y === 5 || rover.x === 5 && rover.y === 3 || rover.x === 4 && rover.y === 8 || rover.x === 2 && rover.y === 1 || rover.x === 2 && rover.y === 6){
            console.log("Impossible movement! Obstacle!")
            rover.y = rover.y-1 } else {
            console.log("moveForward was called")
          } 
          console.log(`Rover position: x: ${rover.x} y: ${rover.y}`)
          break
      }
      // let newPosition = {x: rover.x, y: rover.y}
      // rover.travelLog.push(newPosition)
      rover.travelLog.push([rover.x, rover.y])
    } 
  }
  
  // Lista de comandos
  function listCommands(listString,rover){
    for (let i=0; i < listString.length; i++){
      if (listString[i] === 'r'){
        turnRight(rover)
      } else if (listString[i] === 'l'){
        turnLeft(rover)
      } else if (listString[i] === 'f'){
        moveForward(rover)
      } else if (listString[i] === 'b'){
        moveBackwards(rover)
      } else {
        console.log("command invalid!")
      }
    }
    grid[rover.x][rover.y] = "R"
  }
  
  
  
  console.log(`Rover direction ${rover.direction}`)
  
  listCommands('rffffflbrflb', rover)
  
  console.log(grid.join("\n"))
  // console.log(rover.x, rover.y)
  
  // console.log(rover.path)
  // console.log(rover.travelLog)
  
  