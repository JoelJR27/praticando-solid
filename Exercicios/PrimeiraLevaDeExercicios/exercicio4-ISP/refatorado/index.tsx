import BaseButtonProps from "./interfaces/BaseButtonProps";

function SimpleButton({ label, onClick }: BaseButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
