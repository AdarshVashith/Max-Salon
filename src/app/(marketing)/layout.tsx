import { Navbar, Footer, StickyBookingBar } from '@/components/layout';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <StickyBookingBar />
    </>
  );
}
