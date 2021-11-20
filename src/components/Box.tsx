import styled from "@emotion/styled"
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined"
import ClearIcon from "@mui/icons-material/Clear"
import { css } from "@mui/material/styles"
import React from "react"

const Container = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const BaseIcon = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledCircleIcon = styled(CircleOutlinedIcon)<{ isShow: boolean }>`
  visibility: ${(props) => (props.isShow ? "visible" : "hidden")};
  ${BaseIcon}
`

const StyledClearIcon = styled(ClearIcon)<{ isShow: boolean }>`
  visibility: ${(props) => (props.isShow ? "visible" : "hidden")};
  ${BaseIcon}
`

interface Props {
  display: string
  onClick: () => void
}

const Box = ({ display, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <StyledCircleIcon isShow={display === "o"} fontSize="large" />
      <StyledClearIcon isShow={display === "x"} fontSize="large" />
    </Container>
  )
}

export default Box
