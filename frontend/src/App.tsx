//src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AccountPage from './pages/accountpage';
import SearchModal from './components/searchmodal';
import SubmitReport from './components/submitreport'
import UpVote from './components/upvote'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/search" element={<SearchModal/>} />
        <Route path="/submit" element={<SubmitReport/>} />
        <Route path="/upvote" element={<UpVote/>} />
      </Routes>
    </Router>
  );
}

export default App;
