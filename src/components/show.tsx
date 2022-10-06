import React, { useState } from 'react'
import styled from 'styled-components'
import { IPanelItem } from './panelbutton'

const ShowContainer = styled.div`
  height: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

const Result = styled.div`
  margin: 20px;
  font-size: 48px;
`

interface IShow {
  result: IPanelItem
}
/**
 *  Calculator　計算の結果を表示する
 */
const Show = ({ result }: IShow) => {
  return (
    <ShowContainer>
      <Result>{result.value}</Result>
    </ShowContainer>
  )
}

export default Show
