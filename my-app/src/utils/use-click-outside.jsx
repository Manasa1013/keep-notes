import { useEffect } from "react";

export function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (e) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(e.target)) {
          return;
        }
        handler(e);
      };
      document.addEventListener("click", listener);
      document.addEventListener("keypress", listener);
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("click", listener);
        document.removeEventListener("keypress", listener);
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}
