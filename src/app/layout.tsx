import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cheongpro.vercel.app'),
  title: "정호양 | PM & Frontend Developer Portfolio",
  description: "서비스 기획과 프론트엔드 개발을 함께하는 정호양의 포트폴리오입니다. React, Next.js, TypeScript를 활용한 웹 개발 경험을 소개합니다.",
  keywords: ["포트폴리오", "프론트엔드", "개발자", "React", "Next.js", "TypeScript", "PM", "서비스기획"],
  authors: [{ name: "정호양" }],
  creator: "정호양",
  publisher: "정호양",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://cheongpro.vercel.app',
    title: '정호양 | PM & Frontend Developer Portfolio',
    description: '서비스 기획과 프론트엔드 개발을 함께하는 정호양의 포트폴리오입니다.',
    siteName: 'CheongPro Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '정호양 포트폴리오',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '정호양 | PM & Frontend Developer Portfolio',
    description: '서비스 기획과 프론트엔드 개발을 함께하는 정호양의 포트폴리오입니다.',
    images: ['/og-image.jpg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
