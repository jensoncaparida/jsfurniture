import { Footer } from '@/components/footer';
import { NavBar } from '@/components/navBar';

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <div className="h-full w-full">{children}</div>
      <Footer />
    </>
  );
}
