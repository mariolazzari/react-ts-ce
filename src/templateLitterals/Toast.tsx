type Horizontal = "left" | "center" | "right";
type Vertical = "top" | "center" | "bottom";

type ToastProps = {
  position: Exclude<`${Horizontal}-${Vertical}`, "center-center"> | "center";
};

const Toast = ({ position }: ToastProps) => {
  return <div>Toast position: {position}</div>;
};

export default Toast;
