export interface IPanelProps {
  data: any;
  size: EPanelSize;
  title: string;
  actionPanel: JSX.Element;
  onPanelDismiss: () => void;
}

export enum EPanelSize {
  large = "large",
  medium = "medium",
  "x-large" = "x-large",
  "x-small" = "x-small",
  small = "small",
}
