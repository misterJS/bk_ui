import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Detail from './detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menus/:categoryName" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
