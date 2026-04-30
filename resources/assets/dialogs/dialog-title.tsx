type TitleProps = {
    children: React.ReactNode;
};

export function DialogTitle({ children }: TitleProps) {
    return <h2 className="text-lg font-semibold text-white">{children}</h2>;
}
