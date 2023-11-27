import { ReactNode } from "react";

interface ExperienciaTecnicaInterface {
  titulo: string;
  iconeTitulo: ReactNode;
  experiencias: string[];
}

export default function ExperienciaTecnica({
  titulo,
  iconeTitulo,
  experiencias,
}: ExperienciaTecnicaInterface) {
  return (
    <>
      <strong className="font-bold inline-flex gap-1 text-yellow-300">
        {titulo}
        {iconeTitulo}
      </strong>
      <div className="flex flex-col py-2 border-2 rounded-r border-dashed border-l-0">
        {experiencias.map((value: string) => (
          <span>{value}</span>
        ))}
      </div>
    </>
  );
}
