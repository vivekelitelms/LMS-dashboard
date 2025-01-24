import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export default function BaseLayout({ children}) {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <dir className="flex-1">
                <Header />
                <main className="p-6">
                    {children}
                </main>
            </dir>
            
        </div>
    )
}