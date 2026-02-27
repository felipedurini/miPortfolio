import { Button, Card, CardBody, CardHeader } from "@heroui/react";

export default function AboutCard() {
  return (
    <Card className="surface-card w-full p-6 sm:p-8">
      <CardHeader className="flex-col items-start gap-5 px-0 pb-5 sm:pb-6">
        <div className="space-y-2">
          <p className="section-kicker">Frontend Developer</p>
          <h1 className="section-title text-3xl sm:text-4xl">Felipe Durini</h1>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a className="w-full sm:w-auto" download href="/cv-es.pdf">
            <Button
              className="w-full bg-cyan-700 font-semibold text-white shadow-md shadow-cyan-800/20 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-cyan-600"
              radius="full"
              size="md"
            >
              Descargar CV
            </Button>
          </a>

          <a className="w-full sm:w-auto" download href="/cv-en.pdf">
            <Button
              className="w-full border border-cyan-800/20 bg-cyan-500/8 font-semibold text-cyan-900 transition-colors duration-200 hover:bg-cyan-500/14 dark:border-cyan-200/25 dark:text-cyan-100"
              radius="full"
              size="md"
              variant="light"
            >
              Download Resume
            </Button>
          </a>
        </div>
      </CardHeader>

      <CardBody className="px-0 pt-0">
        <p className="section-copy max-w-3xl leading-relaxed">
          Soy un estudiante de Ciencias de la Computacion en la Universidad de
          Buenos Aires y tutor de Javascript en Coderhouse. Me apasiona la
          programacion y el desarrollo web. He trabajado en varios proyectos
          personales y colaborativos, utilizando tecnologias como React, Node.js
          y bases de datos NoSQL, como MongoDB. Me encanta aprender nuevas
          tecnologias y mejorar mis habilidades constantemente.
        </p>
      </CardBody>
    </Card>
  );
}
