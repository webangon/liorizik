import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "App Name",
  description: "App Description",
  manifest:"/manifest.json",
  robots: {
    index: false,
    follow: false,
  },   
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
        </body>
    </html>
  );
}
 