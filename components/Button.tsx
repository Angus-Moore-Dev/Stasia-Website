interface ButtonProps
{
    icon?: JSX.Element;
    text: string;
    onClick: () => void;
    className?: string; // Allows you to extend the functionality of the button.
    ariaSelected?: boolean;
}

export default function Button({ icon, text, onClick, className, ariaSelected }: ButtonProps)
{
    return <button className={`px-4 py-1 rounded-lg bg-secondary text-primary transition hover:bg-primary hover:text-secondary font-bold ${className ?? ''} flex items-center justify-center gap-4`}
    aria-selected={ariaSelected}
    onClick={onClick}>
        {icon}
        {text}
    </button>
}