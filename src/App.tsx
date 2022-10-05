import styled from 'styled-components'
import Calculator from './components/calculator'
import { CreateStyle } from './style'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 24px;
  color: #ffffff;
  line-height: 24px;
  background: #4a4c4d;
`

function App() {
  return (
    <>
      <CreateStyle></CreateStyle>
      <AppContainer>
        <Calculator />
      </AppContainer>
    </>
  )
}

export default App
