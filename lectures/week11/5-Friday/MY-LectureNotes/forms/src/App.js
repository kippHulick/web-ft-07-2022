import './App.css';
import Forms from './components/Forms'
import { Link, useEffect } from 'react-router-dom'

function App() {

  useEffect(() => {
    document.title = "Home Page"
  
    return () => {
      
    }
  }, [])

  return (
    <div>
      Home Page

      <ul>
        <li>
          <Link to="/"/>
          <Link />
          <Link />
        </li>
      </ul>

    </div>
  );
}

export default App;
