import './globals.css';

export const metadata = {
  title: 'Wasla App',
  description: 'Uber-inspired service booking experience',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
