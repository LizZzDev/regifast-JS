import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RegistroEmpresa from './paginas/empresas/registroEmpresa';
import Login from './paginas/usuarios/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro-empresa" element={<RegistroEmpresa />} />
      </Routes>
    </Router>
  );
}

export default App;