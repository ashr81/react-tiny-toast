
import { ReactChild, ReactNode } from "react";
import { POSITIONS, VARIANTS, ACTIONS } from "..";
import toast from '../toast';
import ToastContainer from '../ToastContainer';

export type variantTypes = typeof VARIANTS[keyof typeof VARIANTS];
export type positionTypes = typeof POSITIONS[keyof typeof POSITIONS];
export type actionTypes = typeof ACTIONS[keyof typeof ACTIONS];
export type contentTypes = ReactChild | ReactNode | null;
export interface ToastOptionsInterface {
  delay?: number;
  timeout?: number;
  position?: positionTypes;
  pause?: boolean;
  className?: string;
  variant?: variantTypes;
  uniqueCode?: string | number;
}

export interface optionTypes extends ToastOptionsInterface {
  id: number;
  key?: string;
}

export type callbackFuncTypes = (
  type: actionTypes,
  content: contentTypes,
  options: optionTypes
) => void

export { VARIANTS, POSITIONS, ACTIONS, toast, ToastContainer };