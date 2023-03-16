import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Responses from './components/Responses';
import './tailwind.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/respuestas" element={<Responses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
