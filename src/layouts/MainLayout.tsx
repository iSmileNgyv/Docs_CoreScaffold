import Header from "@/layouts/Header";
import Sidebar from "@/layouts/Sidebar";
import Footer from "@/layouts/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="app-shell min-h-screen flex flex-col">
            <Header />
            <div className="shell-body flex flex-1">
                <Sidebar />
                <main className="shell-content flex-1 flex flex-col">
                    <div className="content-scroll flex-1 overflow-y-auto">
                        <div className="content-panel">{children}</div>
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    );
}
