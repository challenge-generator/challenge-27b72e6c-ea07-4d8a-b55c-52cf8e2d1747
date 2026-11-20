export type KeyboardEventHandler = (event: React.KeyboardEvent<HTMLElement>) => void;

export type FocusEventHandler = (event: React.FocusEvent<HTMLElement>) => void;

export type MouseEventHandler = (event: React.MouseEvent<HTMLElement>) => void;

export interface KeyboardNavigationConfig {
  onEnter?: () => void;
  onEscape?: () => void;
  onArrowUp?: () => void;
  onArrowDown?: () => void;
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
  onTab?: () => void;
  onShiftTab?: () => void;
}

export interface FocusManagementConfig {
  onFocusIn?: (element: HTMLElement) => void;
  onFocusOut?: (element: HTMLElement) => void;
  onFocusTrap?: (element: HTMLElement) => void;
  onFocusRestore?: (element: HTMLElement | null) => void;
}

export type EventCallback<T extends HTMLElement = HTMLElement> = (
  event: React.KeyboardEvent<T> | React.FocusEvent<T> | React.MouseEvent<T>
) => void;