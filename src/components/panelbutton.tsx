import React from 'react'
import styled from 'styled-components'

// propsから別々のCSSを設定することができます
const PanelButtonContainer = styled.div<IPanelButtonContainer>`
  width: {(props) => (props.doubleCol == '0' ? 300px : 150px)};
  height: 100px;
  grid-column-start: ${(props) => (props.doubleCol == '0' ? 1 : 0)};
  grid-column-end: ${(props) => (props.doubleCol == '0' ? 3 : 0)};
`

const ButtonContainer = styled.div`
  border: 1px solid pink;
  height: 100%;
`

const Button = styled.button`
  width: 100%;
  height: 100%;
  color: #ffffff;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 1px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`

export type IPanelItem = {
  value: string
  flag: string
}

interface IPanelButtonContainer {
  doubleCol: string
}

interface IPanelButton {
  item: IPanelItem
  handlePanelClick: (value: string, flag: string) => void
}

const PanelButton = ({ item, handlePanelClick }: IPanelButton) => {
  return (
    <PanelButtonContainer doubleCol={item.value}>
      <Button onClick={() => handlePanelClick(item.value, item.flag)}>{item.value}</Button>
    </PanelButtonContainer>
  )
}

export default PanelButton
