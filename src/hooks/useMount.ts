import { useEffect } from "react";

export function useMount(callback: TFn) {
  useEffect(() => {
    callback();
  }, []);
}
