import { SnackbarProvider } from "notistack"
import "./App.css"
import TicTacToeGame from "./Container"

function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
    >
      <TicTacToeGame />
    </SnackbarProvider>
  )
}

export default App
