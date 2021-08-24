export interface IToast {
  _id: string;
  text: string;
  title: string;
  type: ToastType;
  link?: {
    name: string;
    href: string;
  };
}
export enum ToastType {
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
}
export interface IOptions {
  timeout?: number;
  type?: ToastType;
  link?: {
    name: string;
    href: string;
  };
}
export interface ISetting {
  position?: IPosition
}
export interface IPosition {
  horizontal: string
  vertical: string
}

export const defaultPosition = {
  horizontal: "right",
  vertical: "bottom"
}