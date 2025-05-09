interface ButtonProps {
    title: string;
    styleName: string;
    handleClick?: () => void;
    type?: 'submit' | 'reset' | 'button' | undefined;
}
export default function Button({
    title,
    styleName,
    handleClick,
    type = 'button',
}: ButtonProps) {
    return (
        <button type={type} onClick={handleClick} className={styleName}>
            {title}
        </button>
    );
}
