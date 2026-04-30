export function ButtonSuccess({ children }: { children: React.ReactNode }) {
    return (
        <button className="flex items-center gap-2 rounded-md border border-malachite-500 bg-malachite-600/10 px-2 py-1 text-malachite-500 hover:cursor-pointer hover:bg-malachite-500/15">
            {children}
        </button>
    );
}
