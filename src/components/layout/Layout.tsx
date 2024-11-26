interface LayoutProps {
    children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {

    return (
        <div className="flex justify-center align-middle items-center h-screen">
            {children}
        </div>
    )
}