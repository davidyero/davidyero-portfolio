// Base de la API del monolito. En producción apunta a Render; se puede
// sobreescribir en build con REACT_APP_API_BASE_URL (p. ej. para apuntar a un
// backend local mientras se escribe).
export const API_BASE_URL: string =
  process.env.REACT_APP_API_BASE_URL ?? 'https://super-davidyero-backend.onrender.com/api';
