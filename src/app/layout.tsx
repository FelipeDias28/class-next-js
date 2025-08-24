import { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'Aula Next.js | My App',
  description: 'Welcome to My App built with Next.js',
  openGraph: {
    title: 'Aula Next.js | My App',
    description: 'Welcome to My App built with Next.js',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
