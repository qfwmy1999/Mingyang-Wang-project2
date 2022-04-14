import { useWordle } from '../context/Wordle'

function Alert() {
    const { alert } = useWordle()

    return (
        <div className={`alert alert-${alert.type} text-center`}>{alert.content}</div>
    )
}

export default Alert