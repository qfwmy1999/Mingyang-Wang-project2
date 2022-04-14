import { useEffect } from 'react'
import { useWordle } from '../context/Wordle'
import { Key } from './Key'

const Keyboard = () => {
  const { status, onSubmit, onInput } = useWordle()

  useEffect(() => {
    const listener = (e) => {
      if (e.code === 'Enter') {
        onSubmit()
      } else if (e.code === 'Backspace') {
        onInput()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          onInput(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onSubmit, onInput])

  const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE']
  ]

  return (
    <>
      {keys.map((keys, i) => (
        <div className="row justify-content-center" key={i}>
          {keys.map((key) => (
            <Key key={key} value={key} status={status[key]} />
          ))}
        </div>
      ))}
    </>
  )
}

export default Keyboard