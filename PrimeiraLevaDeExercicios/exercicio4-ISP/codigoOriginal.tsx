interface ButtonProps {
  label: string;
  onClick: () => void;
  onDoubleClick: () => void;
  onLongPress: () => void;
  isLoading: boolean;
}

function SimpleButton(props: ButtonProps) {
  return <button onClick={props.onClick}>{props.label}</button>;
}