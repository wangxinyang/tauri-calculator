import React, { useState } from 'react'
import styled from 'styled-components'
import Panel from './panel'
import Show from './show'

import { invoke } from '@tauri-apps/api'

const CalculatorContainer = styled.div``

/**
 *  Calculator　コンポネート
 */
const Calculator = () => {
  const [result, setResult] = useState('0')
  const [calc, setCalc] = useState<string[]>([])
  const [ecount, setEcount] = useState(0)
  // 子コンポネートから渡したの内容に対して処理を行います
  const handlePanelClick = (value: string, flag: string): void => {
    switch (flag) {
      case 'number':
        if (ecount == 1) {
          setResult(value)
        } else {
          if (result !== '' && result !== '0') {
            setResult(result + value)
          } else {
            setResult(value)
          }
        }
        setEcount(0)
        setCalc((prev) => [...prev, value])
        break
      case 'system':
        switch (value) {
          case 'AC':
            setResult('0')
            setCalc([])
            break
          case '+/-':
            break
          case '%':
            break
          default:
            break
        }
        break
      case 'cal':
        setResult(result + value)
        setCalc((prev) => [...prev, value])
        break
      case 'point':
        // ポイントがアルの場合、直接リターン
        if (result.indexOf('.') !== -1) {
          return
        }
        setResult(result + '.')
        setCalc((prev) => [...prev, value])
        break
      case 'count':
        setEcount(1)
        // 計算
        let expr = ''
        while (calc.length) {
          let value = calc.shift()
          expr += value
        }
        // call rust method
        invoke('calc_expr', { expr }).then((response) => setResult(response as string))
        break
      default:
        break
    }
  }

  return (
    <CalculatorContainer>
      <Show result={result} />
      <Panel handlePanelClick={handlePanelClick} />
    </CalculatorContainer>
  )
}

export default Calculator
