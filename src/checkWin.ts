const checkWin = (magicSquare: number[][]) => {
  // Check row
  magicSquare.forEach((square) => {
    const sum = square.reduce((total, current) => {
      return total + current
    }, 0)

    if (sum === 15) return true
  })

  //Check column
  for (let i = 0; i < magicSquare.length; i++) {
    let sum = 0
    for (let j = 0; j < magicSquare[i].length; j++) {
      sum = magicSquare[j][i] + sum
    }
    if (sum === 15) return true
    sum = 0
  }

  //Check x
  const sum = magicSquare.reduce((total, current, index) => {
    return total + current[index]
  }, 0)

  if (sum === 15) return true

  for (let i = 0; i < magicSquare.length; i++) {
    let sum = 0
    for (let j = 2; j >= 0; j--) {
      sum = magicSquare[i][j] + sum
    }
    if (sum === 15) return true
  }

  return false
}

export default checkWin
