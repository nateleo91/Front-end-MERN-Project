import Home from './Components/Home'
import Diary from './Components/Diary'
import Create from './Components/Create'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App