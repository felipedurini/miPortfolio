import { useEffect, useState } from "react";

const CHATBOT_URL = "https://udify.app/chatbot/QRjFLgr19obsEysE";
const CHATBOT_GREETING =
  "\u00a1Hola! Soy Hera, pod\u00e9s preguntarme sobre Felipe y lo que sepa te lo dir\u00e9.";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-4 right-[max(0.4rem,env(safe-area-inset-right))] z-50 sm:bottom-5 sm:right-[max(0.7rem,env(safe-area-inset-right))]">
      <div
        className={`pointer-events-auto mb-3 origin-bottom-right transition-all duration-300 ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-95 opacity-0"
        }`}
      >
        <div className="w-[min(94vw,410px)] overflow-hidden rounded-[1.7rem] border border-[rgb(var(--border)_/_0.75)] bg-[rgb(var(--surface)_/_0.96)] shadow-[0_26px_60px_rgba(2,6,23,0.46)] backdrop-blur-xl">
          <div className="border-b border-[rgb(var(--border)_/_0.9)] bg-[linear-gradient(130deg,rgb(var(--brand)_/_0.14),rgb(var(--surface)_/_0.94)_45%)] px-4 py-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--brand))] text-white shadow-[0_10px_24px_rgba(8,145,178,0.35)]">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M8 10h8" />
                    <path d="M8 14h5" />
                  </svg>
                </span>

                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[rgb(var(--brand))]">
                    Hera
                  </p>
                  <p className="max-w-[280px] text-sm leading-relaxed text-[rgb(var(--text))]">
                    {CHATBOT_GREETING}
                  </p>
                </div>
              </div>

              <button
                aria-label="Cerrar chatbot"
                className="rounded-full border border-[rgb(var(--border))] p-2 text-[rgb(var(--text-muted))] transition hover:border-[rgb(var(--brand)_/_0.45)] hover:text-[rgb(var(--text))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))]"
                type="button"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="h-[min(72vh,610px)] min-h-[360px] sm:min-h-[420px]">
            <iframe
              allow="microphone"
              className="h-full w-full border-0"
              loading="lazy"
              src={CHATBOT_URL}
              title="Chatbot del portfolio"
            />
          </div>
        </div>
      </div>

      {!isOpen ? (
        <p className="pointer-events-none mb-2 ml-auto max-w-[280px] rounded-2xl border border-[rgb(var(--border)_/_0.85)] bg-[rgb(var(--surface)_/_0.92)] px-3 py-2 text-xs leading-relaxed text-[rgb(var(--text-muted))] shadow-[0_10px_24px_rgba(2,6,23,0.24)] backdrop-blur-sm">
          {CHATBOT_GREETING}
        </p>
      ) : null}

      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Cerrar chatbot" : "Abrir chatbot"}
        className="pointer-events-auto group relative ml-auto flex items-center gap-2 rounded-full border border-[rgb(var(--border)_/_0.85)] bg-[rgb(var(--surface)_/_0.95)] px-2.5 py-2 text-sm font-semibold text-[rgb(var(--text))] shadow-[0_12px_30px_rgba(2,6,23,0.35)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgb(var(--brand)_/_0.6)] hover:text-[rgb(var(--brand))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg-muted))]"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full text-white transition ${
            isOpen ? "bg-[rgb(var(--ring))]" : "bg-[rgb(var(--brand))]"
          }`}
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 10h8" />
            <path d="M8 14h5" />
          </svg>
        </span>
        <span className="pr-2 text-sm">{isOpen ? "Cerrar" : "Hera"}</span>
      </button>
    </div>
  );
}
