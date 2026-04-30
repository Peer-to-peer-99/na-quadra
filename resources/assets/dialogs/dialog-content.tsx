type ContentProps = {
    children: React.ReactNode;
};

export function DialogContent({ children }: ContentProps) {
    return <div className="mt-4">{children}</div>;
}
