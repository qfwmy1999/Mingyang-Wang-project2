import { useWordle } from './context/Wordle'
import Grid from './components/Grid'
import Keyboard from './components/Keyboard'
import Alert from './components/Alert'

function Game() {
    const { setRestart } = useWordle()
    return (
        <main className="container-fluid" style={{ paddingBottom: '80px' }}>
            <Alert />
            <div className="d-grid col-md-6 mx-auto">
                <Grid />
                <br />
                <Keyboard />
                <br />
            </div>
            <div className="fixed-bottom d-grid col-md-4 mx-auto">
                <button className="btn btn-primary" onClick={() => setRestart(true)}>Reset game</button>
            </div>
        </main>
    )
}

export default Game