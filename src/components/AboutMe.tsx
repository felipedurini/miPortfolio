import { Card, CardHeader, CardBody, CardFooter, Button } from "@heroui/react";

export default function AboutCard() {
  
  return (
    <>
    {/* Anchor para scroll correcto */}
    <div id="about" style={{ position: "relative", top: "-90px" }} />
    
    <Card className="w-full max-w-[600px] p-6">
    
    <CardHeader className="justify-between px-0 pb-4">
    <div>
    <h4 className="text-xl font-semibold text-default-600">
    Felipe Durini
    </h4>
    </div>
    
    {/* Botones de CV */}
    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
    <a href="/cv-es.pdf" download className="w-full sm:w-auto">
    <Button
    color="primary"
    radius="full"
    size="md"
    className="w-full"
    >
    Descargar CV
    </Button>
    </a>
    
    <a href="/cv-en.pdf" download className="w-full sm:w-auto">
    <Button
    color="secondary"
    radius="full"
    size="md"
    className="w-full"
    >
    Download Resume
    </Button>
    </a>
    </div>
    
    </CardHeader>
    
    <CardBody className="px-0 py-0 text-default-500 text-sm md:text-base">
    <p>
    Soy un estudiante de Ciencias de la Computación en la Universidad de
    Buenos Aires y tutor de Javascript en Coderhouse. Me apasiona la
    programación y el desarrollo web. He trabajado en varios proyectos
    personales y colaborativos, utilizando tecnologías como React, Node.js
    y bases de datos NoSQL, como MongoDB. Me encanta aprender nuevas
    tecnologías y mejorar mis habilidades constantemente.
    </p>
    </CardBody>
    
    <CardFooter className="px-0 pt-4 gap-6 text-sm text-default-400">
    {/* Espacio reservado — no lo eliminamos por estructura */}
    </CardFooter>
    
    </Card>
    </>
  );
}
