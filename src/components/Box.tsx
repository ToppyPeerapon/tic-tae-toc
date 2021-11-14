import styled from "@emotion/styled"
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined"
import React from "react"

const Container = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid #000;
`

interface Props {
  display: string
  onClick: () => void
}

const Box = ({ display, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <CircleOutlinedIcon fontSize="large" />
    </Container>
  )
}

export default Box
