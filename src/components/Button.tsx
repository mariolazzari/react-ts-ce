type ButtonProps = {
  label?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={e => onClick(e, 1)}>{label || "Click"}</button>;
};

export default Button;
