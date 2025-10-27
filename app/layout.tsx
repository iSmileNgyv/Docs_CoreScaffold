import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Material_Symbols_Outlined } from "next/font/google";
import "@/styles/globals.scss";

const materialSymbols = Material_Symbols_Outlined({
    display: "block",
    subsets: ["latin"],
    variable: "--font-material-symbols",
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

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
            <body className={`${materialSymbols.variable} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
