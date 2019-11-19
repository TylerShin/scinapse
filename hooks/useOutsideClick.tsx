import { useEffect, MutableRefObject } from 'react';

const useOutsideClick = (ref: MutableRefObject<HTMLElement | null>, callback: Function) => {
  const handleClick = (e: MouseEvent) => {
    if (!ref.current || !e.target) return;

    if (!ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;
