import './styles/App.css';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import LandingPage from './pages/LandingPage'
import AboutMe from './components/AboutMe';
import Projects from './components/Projects'
import Resume from './components/Resume'


function App() {
  return (
    <div>
      < Nav />
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/aboutMe' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
      
    </div>
  )
}

export default App;
