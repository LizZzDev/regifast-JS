import api from "../api/coordinador/index"; // ajusta esto si tu instancia `api` está en otra ruta
import router from "../router";
import endpoints from "../endpoints";

export async function obtenerBarraStatusParaEstadisticas() {
  try {
    const response = await api.get(
      router.COORDINADOR + endpoints.COORDINADOR.OBTENER_BARRA_STATUS_PARA_ESTADISTICAS
    );
    return response.data.data;
  } catch (error) {
    console.error("Error en obtener barra status para estadisticas", error);
    throw error;
  }
}
