const Cell = ({ value, status = 0 }) => {
  return (
    <div className={`col cell row align-items-center justify-content-center status${status}`}>{value}</div>
  )
}

export default Cell
