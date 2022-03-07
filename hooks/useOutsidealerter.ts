import { MutableRefObject, useEffect } from "react"

export const useOutsideAlerter = (ref: MutableRefObject<any>, callback: Function) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.button !== 0) return;
      
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [ref, callback]);
}