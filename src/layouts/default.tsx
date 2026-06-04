import { Navbar } from "@/components/navbar";
// Asistente virtual desactivado temporalmente.
// Para reactivarlo, descomentar este import y el render de <ChatbotWidget /> al final del layout.
// import ChatbotWidget from "@/components/ChatbotWidget";

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
      {/* Asistente virtual desactivado temporalmente.
          Para reactivarlo, descomentar el import superior y este componente. */}
      {/* <ChatbotWidget /> */}
    </div>
  );
}
