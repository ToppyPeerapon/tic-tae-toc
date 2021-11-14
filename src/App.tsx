import styled from "@emotion/styled"
import React, { useEffect, useState } from "react"
import "./App.css"
import Box from "./components/Box"
import checkWin from "./utils/checkWin"
import makeSquare from "./utils/makeSquare"

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`

function App() {
  const [game, setGame] = useState<string[][]>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ])
  const [currentPlayer, setCurrentPlayer] = useState<"o" | "x">("x")

  const togglePlayer = () => {
    if (currentPlayer === "o") setCurrentPlayer("x")
    else setCurrentPlayer("o")
  }

  useEffect(() => {
    const xSquare = makeSquare(game, "x")
    const oSquare = makeSquare(game, "o")

    if (checkWin(xSquare)) alert("x is winner")
    if (checkWin(oSquare)) alert("o is winner")
  }, [game])

  return (
    <GridLayout>
      {(() => {
        const renderEle = []
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            renderEle.push(
              <Box
                onClick={() => {
                  let mock = [...game]
                  mock[i][j] = currentPlayer
                  setGame(mock)
                  togglePlayer()
                }}
                display={game[i][j]}
              />
            )
          }
        }
        return renderEle
      })()}
    </GridLayout>
  )
}

export default App
