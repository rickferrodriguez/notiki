interface ButtonProps {
	title: string;
	styleName: string;
}
export default function Button({ title, styleName }: ButtonProps) {
	return <button className={styleName}>{title}</button>;
}
