import { useSearchParams } from "react-router-dom";
import { useCallback } from "react";

/**
 * Hook para leer y escribir parámetros de la URL
 * @returns {[URLSearchParams, (updates: Record<string, string | null>) => void]}
 */
export function useQueryState() {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateParams = useCallback(
    (updates) => {
      const newParams = new URLSearchParams(searchParams);

      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === undefined || value === "") {
          newParams.delete(key);
        } else {
          newParams.set(key, value);
        }
      });

      setSearchParams(newParams, { replace: true });
    },
    [searchParams, setSearchParams]
  );

  return [searchParams, updateParams];
}

/**
 * Obtiene un valor específico del query string
 * @param {URLSearchParams} params
 * @param {string} key
 * @param {string} [defaultValue]
 * @returns {string}
 */
export function getParam(params, key, defaultValue = "") {
  return params.get(key) || defaultValue;
}
