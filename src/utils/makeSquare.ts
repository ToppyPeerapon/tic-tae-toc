const makeSquare = (board: string[][], player: "x" | "o") => {
  const magicSquare = [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ]

  const playerBinaryBoard = board.map((row) => {
    return row.map((col) => {
      if (col === player) return 1
      else return 0
    })
  })

  return playerBinaryBoard.map((row, i) => {
    return row.map((col, j) => {
      return col * magicSquare[i][j]
    })
  })
}

export default makeSquare
