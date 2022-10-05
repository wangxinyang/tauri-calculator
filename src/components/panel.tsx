import React from 'react'
import styled from 'styled-components'
import PanelButton from './panelbutton'

const PanelContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const datas = [
  { value: 'AC', flag: 'system' },
  { value: '+/-', flag: 'system' },
  { value: '%', flag: 'system' },
  { value: '/', flag: 'cal' },
  { value: '7', flag: 'number' },
  { value: '8', flag: 'number' },
  { value: '9', flag: 'number' },
  { value: '*', flag: 'cal' },
  { value: '4', flag: 'number' },
  { value: '5', flag: 'number' },
  { value: '6', flag: 'number' },
  { value: '-', flag: 'cal' },
  { value: '1', flag: 'number' },
  { value: '2', flag: 'number' },
  { value: '3', flag: 'number' },
  { value: '+', flag: 'cal' },
  { value: '0', flag: 'number' },
  { value: '.', flag: 'point' },
  { value: '=', flag: 'count' },
]

interface IPanel {
  handlePanelClick: (value: string, flag: string) => void
}

/**
 *  Calculator　計算のボタン　コンポネート
 */
const Panel = ({ handlePanelClick }: IPanel) => {
  return (
    <PanelContainer>
      {datas.map((item, index) => {
        return <PanelButton key={index} item={item} handlePanelClick={handlePanelClick} />
      })}
    </PanelContainer>
  )
}

export default Panel
