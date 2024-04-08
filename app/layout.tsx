import '@/app/ui/global.css';
import { lusitana,inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={`${lusitana.className} antialiased`}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
