import styles from "./styles.module.scss";

interface IButton {
  type: string;
  text: string;
  buttonType: "button" | "submit" | "reset" | undefined;
  onClick: (data?: any) => void;
}

export default function Button({ type, text, buttonType, onClick }: IButton) {
  return (
    <button
      className={type === "primary" ? styles.primary : styles.secondary}
      type={buttonType}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
