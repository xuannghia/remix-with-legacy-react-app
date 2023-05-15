import type { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
