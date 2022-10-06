import React, { useState } from 'react'
import styled from 'styled-components'
import Panel from './panel'
import Show from './show'

import { invoke } from '@tauri-apps/api'
import { IPanelItem } from './panelbutton'

const CalculatorContainer = styled.div``

/**
 *  Calculator　コンポネート
 */
const Calculator = () => {
  const [result, setResult] = useState({ value: '0', flag: 'number' })
  const [calcStacked, setCalcStacked] = useState<string[]>([])
  const [isCalc, setIsCalc] = useState(false)

  const handlePanelClick = (value: string, flag: string): void => {
    switch (flag) {
      case 'number':
        if (result.value !== '0') {
          if (isCalc) {
            setResult({ value, flag })
            setCalcStacked((prev) => [...prev, value])
          } else {
            setResult({ value: result.value + value, flag })
            setCalcStacked([result.value + value])
          }
        } else {
          setResult({ value, flag })
          setCalcStacked([value])
        }
        setIsCalc(false)
        break
      case 'system':
        switch (value) {
          case 'AC':
            // reset
            setIsCalc(false)
            setResult({ value: '0', flag: 'number' })
            setCalcStacked([])
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
        // 運算子をクリックするとtrueになる
        setIsCalc(true)
        setCalcStacked((prev) => [...prev, value])
        break
      case 'count':
        // 計算
        let expr = calcStacked.reduce((prev, cur) => {
          const returns = prev + cur
          return returns
        })
        // call rust method
        invoke('calc_expr', { expr }).then((response) =>
          setResult({ value: response as string, flag: 'number' })
        )
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
