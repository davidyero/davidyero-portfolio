import { useEffect, useState } from 'react';
import { API_BASE_URL } from './api';

export interface FeatureFlags {
  /** Muestra la sección Blog en el header. */
  blog: boolean;
  /** Muestra la sección Logs (build-in-public) en el header. */
  logs: boolean;
}

/**
 * Interruptores servidos por el dominio `portfolio` del backend y gobernados
 * desde el backoffice. Existen para que Blog y Logs aparezcan en el header solo
 * cuando ya hay entradas que leer, sin esperar a un despliegue.
 *
 * Apagados por defecto a propósito: mientras la respuesta no llega —o si el
 * backend está frío o caído— es mejor no enseñar una sección que lleva a una
 * lista vacía. Aparecen cuando el servidor lo confirma, no antes.
 */
const DEFAULTS: FeatureFlags = { blog: false, logs: false };

export const useFeatureFlags = (): FeatureFlags => {
  const [flags, setFlags] = useState<FeatureFlags>(DEFAULTS);

  useEffect(() => {
    const controller = new AbortController();

    const load = async (): Promise<void> => {
      try {
        const res = await fetch(`${API_BASE_URL}/portfolio/flags`, {
          signal: controller.signal,
        });
        if (!res.ok) return;
        const data = (await res.json()) as { flags?: Partial<FeatureFlags> };
        setFlags({
          blog: data.flags?.blog ?? DEFAULTS.blog,
          logs: data.flags?.logs ?? DEFAULTS.logs,
        });
      } catch {
        // Sin red o petición cancelada: se quedan los valores por defecto.
      }
    };

    void load();
    return () => controller.abort();
  }, []);

  return flags;
};
