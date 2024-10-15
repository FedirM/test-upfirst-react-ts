
import './App.css';

import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from './pages/home';
import ContactsPage from './pages/contacts';

function App() {

  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={ <Navigate to="/home" /> } />
    </Routes>
  );
}

export default App;
