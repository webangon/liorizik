import type { Metadata } from "next";
import Providers from './components/ProgressBarProvider'
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
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
        <Providers>{children}</Providers>
        </body>
    </html>
  );
}
 