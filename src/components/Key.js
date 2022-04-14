import { useWordle } from '../context/Wordle'

export const Key = ({ value, status = 0 }) => {
  const { onSubmit, onInput } = useWordle()

  const handleClick = (event) => {
    if (value === 'ENTER') {
      onSubmit()
    } else {
      onInput(value === 'DELETE' ? '' : value)
    }
    event.currentTarget.blur()
  }

  const names = {
    ENTER: 'ENTER',
    DELETE: 'DELETE'
  }

  const statusClass = ['btn-light', 'btn-secondary', 'btn-warning', 'btn-success'][status]
  return (
    <button className={`key btn ${statusClass} ${names[value] ? 'big' : ''}`} onClick={handleClick}>
      {names[value] || value}
    </button>
  )
}
