import { FaLaptopCode } from "react-icons/fa6";
import { getPeriodoExperiencia } from "../utils/helpers";
import Contato from "./Contato";
import SobreMim from "./SobreMim";
import { useAppContext } from "../hook/useAppContext";
import { IoServerOutline } from "react-icons/io5";
import { MdOutlineArchitecture } from "react-icons/md";
import ExperienciaTecnica from "./ExperienciaTecnica";
import ExperienciaProfissional from "./ExperienciaProfissional";

export default function Experiencias() {
  const app = useAppContext();

  return (
    <section className="flex flex-col sm:flex-row sm:divide-x-2 divide-transparent py-5">
      <div className="flex flex-col flex-1 gap-5">
        <Contato />
        <div className="flex flex-col flex-1 text-white p-5 bg-teal-900/80">
          <strong className="text-xl font-bold underline">
            {app.isPT() ? "Experiência Técnica" : "Technical Experience"}
          </strong>
          <span className="font-light">
            {app.isPT()
              ? "Tecnologias que utilizei em ambiente profissional"
              : "Technologies I have used in a professional environment."}
          </span>
          <div className="flex flex-col gap-5 my-2.5">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col justify-center gap-2.5 rounded-md">
                <div className="flex flex-col font-medium">
                  <div className="flex justify-center">
                    <div className="border-l-2 border-yellow-300"></div>
                    <div className="flex flex-col flex-1 text-sm gap-2.5 pl-2.5">
                      <ExperienciaTecnica
                        titulo={app.isPT() ? "Código" : "Code"}
                        iconeTitulo={<FaLaptopCode size={20} />}
                        experiencias={[
                          "PHP (Laravel, Lumen)",
                          "Javascript (NodeJS, ReactJS, NextJS)",
                          "CSS (SASS, Tailwind, Bootstrap)",
                          "Golang",
                        ]}
                      />
                      <ExperienciaTecnica
                        titulo={app.isPT() ? "Banco de Dados" : "Database"}
                        iconeTitulo={<IoServerOutline size={20} />}
                        experiencias={[
                          "SQL (MySQL, PostgreSQL)",
                          "NoSQL (MongoDB)",
                        ]}
                      />
                      <ExperienciaTecnica
                        titulo={
                          app.isPT()
                            ? "Padrões, Arquitetura etc."
                            : "Patterns, Architecture etc."
                        }
                        iconeTitulo={<MdOutlineArchitecture size={20} />}
                        experiencias={[
                          "MVC",
                          "DDD",
                          app.isPT() ? "APIs REST" : "REST APIs",
                          app.isPT() ? "Microsserviços" : "Microservices",
                          `${
                            app.isPT() ? "Mensageria" : "Messaging"
                          } (RabbitMQ, Kafka)`,
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-5 pt-5 sm:pt-0">
        <SobreMim />
        <div className="flex flex-col flex-1 text-white p-5 bg-sky-800">
          <strong className="text-xl font-bold underline">
            {app.isPT()
              ? "Experiência Profissional"
              : "Professional Experience"}
          </strong>
          <span className="font-light">
            {app.isPT()
              ? "Instituições em que atuei como desenvolvedor"
              : "Institutions where I worked as a developer"}
          </span>
          <div className="flex flex-col divide-y-2 divide-teal-300">
            <ExperienciaProfissional
              cargo={
                app.isPT() ? "Desenvolvedor Fullstack" : "Fullstack Developer"
              }
              instituicao="3C Sistemas"
              periodo={getPeriodoExperiencia(
                app.language,
                "2020-08-20",
                "2022-02-01"
              )}
            />

            <ExperienciaProfissional
              cargo={
                app.isPT() ? "Desenvolvedor Fullstack" : "Fullstack Developer"
              }
              instituicao={app.isPT() ? "Freelance" : "Freelance"}
              periodo={getPeriodoExperiencia(
                app.language,
                "2022-02-01",
                "2022-10-02"
              )}
            />

            <ExperienciaProfissional
              cargo={app.isPT() ? "Desenvolvedor Backned" : "Backend Developer"}
              instituicao="Oliveira Trust DTVM S.A."
              periodo={`${
                app.isPT() ? "Atuando" : "Working"
              } (${getPeriodoExperiencia(app.language, "2022-10-03")})`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
