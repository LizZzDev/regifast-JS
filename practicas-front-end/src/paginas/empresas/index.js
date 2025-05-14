import React, { useEffect, useState } from 'react';
import './styles.css'; 

const EmpresaDashboard = () => {
  const [empresa, setEmpresa] = useState(null);

  useEffect(() => {
    // Llama al backend para obtener los datos de la empresa autenticada
    fetch('/api/empresa') // Ajustá la URL según tu backend
      .then(res => {
        if (!res.ok) throw new Error('No se pudo obtener los datos');
        return res.json();
      })
      .then(data => setEmpresa(data))
      .catch(err => console.error(err));
  }, []);

  if (!empresa) return <p>Cargando datos...</p>;

};

export default EmpresaDashboard;
