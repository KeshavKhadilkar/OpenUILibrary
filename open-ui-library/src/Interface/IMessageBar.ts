export interface IMessageBarProps {
  id: string;
  message: string;
  type: MessageType;
  onmessageBarDissmiss?: (id: string) => void;
  action?: JSX.Element;
}

export enum MessageType {
  error = "error",
  info = "info",
  warning = "warning",
  success = "success",
  blocked = "blocked",
  severewarning = "severewarning",
}
