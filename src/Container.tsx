import styled from "@emotion/styled"
import { useSnackbar } from "notistack"
import React, { useEffect, useState } from "react"

import Box from "./components/Box"
import checkWin from "./utils/checkWin"
import makeSquare from "./utils/makeSquare"

const ContainerTest = styled.div`
  width: 300px;
  margin: auto;
`

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`

const TicTacToeGame = () => {
  const [game, setGame] = useState<string[][]>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ])
  const [currentPlayer, setCurrentPlayer] = useState<"o" | "x">("x")

  const { enqueueSnackbar } = useSnackbar()

  const togglePlayer = () => {
    if (currentPlayer === "o") setCurrentPlayer("x")
    else setCurrentPlayer("o")
  }

  useEffect(() => {
    const xSquare = makeSquare(game, "x")
    const oSquare = makeSquare(game, "o")

    if (checkWin(xSquare)) enqueueSnackbar("Winner")
    if (checkWin(oSquare)) enqueueSnackbar("Winner")
  }, [enqueueSnackbar, game])
  return (
    <ContainerTest>
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
    </ContainerTest>
  )
}

export default TicTacToeGame
