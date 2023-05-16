import type {PropsWithChildren} from 'react';

type ButtonProps = {
	onClick?: () => void;
} & PropsWithChildren;

export default function Button({children, onClick}: ButtonProps) {
	return <button type="button" onClick={onClick}>{children}</button>;
}
