import { useState, useEffect, useCallback } from 'react'
import styles from './HeaderAnimationLetter.module.scss'

type HeaderAnimationLetterProps = {
  className: string
}

type GridCell = boolean

type GridRow = GridCell[]

const HeaderAnimationLetter = ({ className }: HeaderAnimationLetterProps) => {
  const generateInitialGrid = (): GridRow[] => {
    const initialGrid: GridRow[] = []
    for (let i = 0; i < 16; i++) {
      const row: GridRow = []
      for (let j = 0; j < 22; j++) {
        row.push(Math.random() < 0.2)
      }
      initialGrid.push(row)
    }
    return initialGrid
  }

  const [grid, setGrid] = useState<GridRow[]>(generateInitialGrid())

  const clearLetter = useCallback((row: number, col: number) => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((r) => [...r])
      newGrid[row][col] = false
      return newGrid
    })
  }, [])

  const generateLetter = useCallback(() => {
    const randomRow = Math.floor(Math.random() * 16)
    const randomCol = Math.floor(Math.random() * 22)
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => [...row])
      newGrid[randomRow][randomCol] = true
      return newGrid
    })

    const timeout = Math.random() * 9000 + 1000
    setTimeout(() => {
      clearLetter(randomRow, randomCol)
    }, timeout)
  }, [clearLetter])

  useEffect(() => {
    const interval = setInterval(() => {
      generateLetter()
    }, Math.random() * 200 + 200)

    return () => clearInterval(interval)
  }, [generateLetter])

  return (
    <div className={`${styles.grid} ${className}`}>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`${styles.cell} ${cell ? styles.active : ''}`}
            >
              M
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default HeaderAnimationLetter
