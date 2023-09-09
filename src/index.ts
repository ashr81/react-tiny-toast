import toast from './toast';
import ToastContainer from './ToastContainer';
export const POSITIONS = {
  TOP_CENTER: 'top-center',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center'
} as const;
export const VARIANTS = {
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  DEFAULT: 'default'
} as const;
export const ACTIONS = {
  ADD: 'ADD',
  REMOVE: 'REMOVE'
} as const;

export { toast, ToastContainer };