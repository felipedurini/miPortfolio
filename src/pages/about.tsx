import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="mx-auto flex min-h-[58vh] w-full max-w-3xl items-center justify-center">
        <div className="surface-card w-full rounded-3xl p-8 text-center sm:p-10">
          <p className="section-kicker">Ruta</p>
          <h1 className="section-title mt-2">About</h1>
          <p className="section-copy mt-3">
            Seccion reservada para ampliar informacion personal y experiencia.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
