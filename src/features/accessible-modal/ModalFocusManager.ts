// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useEffect, useRef, useCallback, RefObject } from 'react';

interface UseModalFocusTrapOptions {
  onFocusTrap?: () => void;
  onFocusRestore?: () => void;
}

export function useModalFocusTrap(
  ref: RefObject<HTMLElement>,
  isOpen: boolean,
  options?: UseModalFocusTrapOptions
): any {
  throw new Error('TODO(reto): useModalFocusTrap');
}

export default useModalFocusTrap;