import { ReactChild, ReactNode } from "react";
import { POSITIONS, VARIANTS, ACTIONS } from "..";
import toast from "../toast";
import ToastContainer from "../ToastContainer";

export type Variant = (typeof VARIANTS)[keyof typeof VARIANTS];
export type Position = (typeof POSITIONS)[keyof typeof POSITIONS];
export type Action = (typeof ACTIONS)[keyof typeof ACTIONS];
export type Content = ReactChild | ReactNode | null;
export interface ToastOptionsInterface {
  delay?: number;
  timeout?: number;
  position?: Position;
  pause?: boolean;
  className?: string;
  variant?: Variant;
  uniqueCode?: string | number;
}

export interface Options extends ToastOptionsInterface {
  id: number;
  key?: string;
}

export type callbackFuncTypes = (
  type: Action,
  content: Content,
  options: Options
) => void;

export { VARIANTS, POSITIONS, ACTIONS, toast, ToastContainer };
