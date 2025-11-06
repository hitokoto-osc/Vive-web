import { useEffect } from "react";
export function useUnMount(callback: TFn) {
  useEffect(() => {
    return () => callback();
  }, []);
}
