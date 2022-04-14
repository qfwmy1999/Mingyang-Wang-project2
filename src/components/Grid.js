import { useWordle } from '../context/Wordle'
import { getStatusByPlace } from '../utils'
import Cell from './Cell'

const Grid = () => {
  const { solution, guesses, count, length } = useWordle()
  return (
    <>
      {guesses.map((guess, i) => {
          guess = guess.slice()
          guess.push(...Array(length).fill(''))
          guess = guess.slice(0, length)
          const status = solution && count > i ? getStatusByPlace(guess.slice(), solution.split('')) : {}
          return (
            <div className="row justify-content-center" key={i}>
                {guess.map((key, i) => (
                    <Cell key={i} value={key} status={status[i]} />
                ))}
            </div>
          )
      })}
    </>
  )
}

export default Grid
