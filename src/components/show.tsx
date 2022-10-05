import React, { useState } from 'react'
import styled from 'styled-components'

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
  result: string
}
/**
 *  Calculator　計算の結果を表示する
 */
const Show = ({ result }: IShow) => {
  return (
    <ShowContainer>
      <Result>{result}</Result>
    </ShowContainer>
  )
}

export default Show
