
import { ReactChild, ReactNode } from "react";

export type variantTypes = 'success' | 'danger' | 'warning' | 'default';
export type positionTypes = 'top-center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'bottom-center';
export type actionTypes = 'ADD' | 'REMOVE';
export type contentTypes = ReactChild | ReactNode | null;
export interface optionTypes {
  delay?: number;
  timeout?: number;
  position?: positionTypes;
  id?: number;
  pause?: boolean;
  key?: string;
}

export type callbackFuncTypes = (
  type: string,
  content: contentTypes,
  options: optionTypes
) => void