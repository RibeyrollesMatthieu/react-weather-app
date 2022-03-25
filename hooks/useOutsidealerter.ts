import { MutableRefObject, useEffect } from "react"

export const useOutsideAlerter = (ref: MutableRefObject<any>, callback: Function, ...exceptions: string[]) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.button !== 0) return;

      /* check if target is one of the exceptions */
      try {
        if (exceptions.filter(e => (event.target as HTMLElement)?.classList.contains(e)).length) return;
      } catch {
        return;
      }
      
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [ref, callback, exceptions]);
}