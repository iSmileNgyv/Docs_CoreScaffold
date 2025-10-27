import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.scss";

export const metadata: Metadata = {
    title: "Docs Core Scaffold",
    description: "Internal documentation system",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
