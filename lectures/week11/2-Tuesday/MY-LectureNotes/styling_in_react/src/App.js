import './App.css';
import Welcome from './components/welcome'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar brandLink="Hello world" brandText="July 2022 Cohort" brandDescription="Learning React" />
      <div className='row'>
        <div className='col-3 bg-success'>1</div>
        <div className='col-3 bg-warning'>2</div>
        <div className='col-3 bg-info'>3</div>
        <div className='col-3'>4</div>
      </div>
      <h1 id='h1a'>styling in react</h1>
      <Welcome />
    </>
  );
}

export default App;
