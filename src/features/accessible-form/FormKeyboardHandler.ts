// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useCallback, useEffect, RefObject } from 'react';

interface UseFormKeyboardNavigationOptions {
  onEnter?: () => void;
  onEscape?: () => void;
}

export function useFormKeyboardNavigation(
  ref: RefObject<HTMLElement>,
  options?: UseFormKeyboardNavigationOptions
): any {
  throw new Error('TODO(reto): useFormKeyboardNavigation');
}

export default useFormKeyboardNavigation;