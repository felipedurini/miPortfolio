import { Navbar } from "@/components/navbar";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Navbar />
      <main className="section-shell flex flex-col gap-16 pb-20 pt-28 sm:gap-20 lg:pt-32">
        {children}
      </main>
      <ChatbotWidget />
    </div>
  );
}
