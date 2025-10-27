import MainLayout from "@/layouts/MainLayout";

export default function MainSectionLayout({
                                              children,
                                          }: {
    children: React.ReactNode;
}) {
    return <MainLayout>{children}</MainLayout>;
}
