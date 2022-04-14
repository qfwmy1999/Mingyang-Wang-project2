import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <main className="container-fluid">
        <div className="d-grid gap-2 col-md-4 col-sm-6 mx-auto">
          <Link to="/game?level=0" className="btn btn-outline-primary">Easy difficulty</Link>
          <Link to="/game?level=1" className="btn btn-outline-primary">Medium difficulty</Link>
          <Link to="/game?level=2" className="btn btn-outline-primary">Hard difficulty</Link>
          <Link to="/rule" className="btn btn-outline-success">Game rules</Link>
        </div>
      </main>
    </>
  );
}

export default App;
