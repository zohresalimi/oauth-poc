import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const handleClick = () => {
    window.location.href= 'https://localhost:3000/en-row/verify-token?token=2334234io3iuj2iuh34k2h2i3u4h234';
    console.log(window.location.href)
  }

  return (
    <div className="App">
      {/* <form> */}
        <h3 className='m-b-30'>Sign Up</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button className="btn submit-btn"
            onClick={handleClick}>
            Sign Up
          </button>
        </div>
      {/* </form> */}
    </div>
  );
}

export default App;
