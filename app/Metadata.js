import { Metadata } from 'next';

export const metadata = {
  title: 'Hafiz Atif Salfi | Full Stack Web Developer Portfolio',
  description: 'Hi, I\'m Hafiz Atif Salfi, a web developer and programmer from Kasur, Pakistan. Explore my portfolio to see my skills in web design, development, and more.',
  keywords: ['Hafiz Atif Salfi', 'Hafiz Atif', 'Web Developer', 'Portfolio', 'Full Stack Developer', 'Kasur', 'Pakistan', 'Programming', 'Web Design'],
  authors: [{ name: 'Hafiz Atif Salfi' }],
  openGraph: {
    title: 'Hafiz Atif Salfi | Professional Portfolio',
    description: 'Explore the work and skills of Hafiz Atif Salfi, a web developer and programmer based in Kasur, Pakistan.',
    url: 'https://hafiz-atif.vercel.app',
    siteName: 'Hafiz Atif Salfi Portfolio',
    images: [
      {
        url: 'https://hafiz-atif.vercel.app/BG.png',
        width: 800,
        height: 600,
        alt: 'Hafiz Atif Salfi Profile Picture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hafiz Atif Salfi | Professional Portfolio',
    description: 'Explore the work and skills of Hafiz Atif Salfi, a web developer and programmer based in Kasur, Pakistan.',
    creator: '@your_twitter_handle',
    images: ['https://hafiz-atif.vercel.app/BG.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}