/* eslint-disable @next/next/no-page-custom-font */
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
            <head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24..48,100..700,0..1,0&display=swap"
                />
            </head>
            <body className="antialiased">
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
