import Header from "@/layouts/Header";
import Sidebar from "@/layouts/Sidebar";
import Footer from "@/layouts/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 flex flex-col">
                    <div className="flex-1 p-6 overflow-y-auto">{children}</div>
                    <Footer />
                </main>
            </div>
        </div>
    );
}
