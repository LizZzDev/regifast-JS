import app from './app.js';
import { PORT } from './configuracion/constantes.js';

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
