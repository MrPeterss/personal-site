import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';
import local from 'next/font/local';


const inter = Inter({ subsets: ["latin"] });

const googleSans = local({
  src: [
    {
      path: '../public/fonts/gs-regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/gs-italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/gs-medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/gs-medium-italic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/gs-bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/gs-bold-italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-google'
});


export const metadata: Metadata = {
  title: "Peter Bidoshi",
  description: "The personal website of Peter Bidoshi.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/icon-light.png',
        href: '/images/icon-light.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/icon-dark.png',
        href: '/images/icon-dark.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${googleSans.variable} text-white flex flex-col items-center md:cursor-none bg-[#1E1E1E] bg-[url('/images/bg.svg')] bg-fixed`}>
        <Providers>
          <main className="w-full md:w-[712] font-google flex flex-col">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
