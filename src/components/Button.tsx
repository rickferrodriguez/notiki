interface ButtonProps {
    title: string;
    styleName: string;
    handleClick: () => void;
}
export default function Button({ title, styleName, handleClick }: ButtonProps) {
    return (
        <button onClick={handleClick} className={styleName}>
            {title}
        </button>
    );
}
