type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: Props) {
    return (
        <input
            {...props}
            className={`w-full rounded-md border border-boston-blue-900 px-3 py-1.5 ${className ?? ''}`}
        />
    );
}
