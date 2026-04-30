type Props = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export function Dialog({ open, onClose, children }: Props) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* overlay */}
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />

            {/* conteúdo */}
            <div
                className="relative w-[450px] rounded-2xl border border-boston-blue-900 bg-boston-blue-950/20 p-6 shadow"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}
