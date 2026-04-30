type Props = {
    children: React.ReactNode;
};

export function FormTitle({ children }: Props) {
    return (
        <h2 className="font-mono text-xs font-bold uppercase">{children}</h2>
    );
}
