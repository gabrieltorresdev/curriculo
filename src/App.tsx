import {
  Atom,
  Database,
  Envelope,
  FileCss,
  FileJs,
  FileTsx,
  GithubLogo,
  GraduationCap,
  Graph,
  HouseLine,
  IdentificationCard,
  LinkedinLogo,
  PhoneCall,
  Translate,
} from "phosphor-react";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex border-b border-zinc-200">
        <div className="flex flex-1 flex-col p-6 gap-5">
          <strong className="text-center text-3xl tracking-wider">
            Gabriel Torres Brum
          </strong>
          <div className="grid grid-cols-12 p-4">
            <div className="col-span-7 flex flex-col gap-3">
              <strong>Contato</strong>
              <div className="flex gap-2">
                <Envelope size={20} />
                <span className="text-sm font-medium tracking-wider">
                  gtorresbrum@gmail.com
                </span>
              </div>
              <div className="flex gap-2">
                <PhoneCall size={20} />
                <span className="text-sm font-medium tracking-wider">
                  (21) 9 96676-3047
                </span>
              </div>
              <div className="flex gap-2">
                <HouseLine size={20} />
                <span className="text-sm font-medium tracking-wider">
                  Rua Paraná - Piedade - Rio de Janeiro - RJ
                </span>
              </div>
            </div>
            <div className="col-span-5 flex flex-col gap-3">
              <strong>Sobre mim</strong>
              <div className="flex justify-start gap-2">
                <IdentificationCard size={20} />
                <span className="text-sm font-medium tracking-wider">
                  23 anos
                </span>
              </div>
              <div className="flex justify-start gap-2">
                <GraduationCap size={20} />
                <span className="text-sm font-medium tracking-wider">
                  Ensino Superior incompleto
                </span>
              </div>
              <div className="flex justify-start gap-2">
                <Translate size={20} />
                <span className="text-sm font-medium tracking-wider">
                  Inglês Intermediário
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col flex-1">
        <section className="flex flex-1 bg-sky-800">
          <div className="flex flex-col flex-1 gap-5 text-white py-10 pl-10">
            <strong className="text-2xl font-extrabold tracking-wider">
              Experiência Técnica
            </strong>
            <div className="flex flex-col gap-5">
              <span className="tracking-wider text-lg">
                Tecnologias utilizadas em ambiente profissional:
              </span>
              <div className="p-5 rounded border border-zinc-300 flex flex-col gap-5">
                <div className="flex items-center">
                  <img
                    className="invert w-[1.65rem]"
                    src="../public/php.svg"
                    alt="PHP"
                  />
                  <div className="text-xl font-medium ml-2">PHP / Laravel</div>
                </div>
                <div className="flex items-center">
                  <FileJs size={28} />
                  <div className="text-xl font-medium ml-2">
                    Javascript / Node JS
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center">
                    <FileCss size={28} />
                    <div className="text-xl font-medium ml-2">
                      CSS / Tailwind CSS
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Database size={28} />
                  <div className="text-xl font-medium ml-2">MySQL</div>
                </div>
              </div>
              <span className="tracking-wider text-lg">
                Tecnologias utilizadas em projetos pessoais e cursos (interesses):
              </span>
              <div className="p-5 rounded border border-zinc-300 flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center">
                    <Atom size={28} />
                    <div className="text-xl font-medium ml-2">
                      React JS / Next JS
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center">
                    <FileTsx size={28} />
                    <div className="text-xl font-medium ml-2">Typescript</div>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center">
                    <Graph size={28} />
                    <div className="text-xl font-medium ml-2">
                      GraphQL / GraphCMS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-10 border"></div>
          <div className="flex flex-col flex-1 gap-5 text-white py-10 pr-10">
            <strong className="text-2xl font-extrabold tracking-wider">
              Experiência Profissional
            </strong>
            <div className="flex flex-1 items-center p-5 rounded bg-zinc-200 text-sky-700 tracking-wider font-medium">
              <ul>
                <li>
                  <span className="font-bold mr-1">
                    Cargo:
                  </span>
                  Estagiário
                </li>
                <li>
                  <span className="font-bold mr-1">
                    Instituição:
                  </span>
                  Tribunal Regional Federal
                </li>
                <li>
                  <span className="font-bold mr-1">
                    Atividade:
                  </span>
                  Suporte Técnico
                </li>
                <li>
                  <span className="font-bold mr-1">
                    Período: 
                  </span>
                  1 ano
                </li>
              </ul>
            </div>
            <div className="flex flex-1 items-center p-5 rounded bg-zinc-200 text-sky-700 tracking-wider font-medium">
              <ul>
                <li>
                  <span className="font-bold mr-1.5">
                    Cargo:
                  </span>
                  Analista de Service Desk
                </li>
                <li>
                  <span className="font-bold mr-1.5">
                    Instituição:
                  </span>
                  3C Sistemas
                </li>
                <li>
                  <span className="font-bold mr-1.5">
                    Atividade:
                  </span>
                  Treinamento e atuação no desenvolvimento/manutenção dos sistemas da empresa
                </li>
                <li>
                  <span className="font-bold mr-1.5">
                    Período:
                  </span>
                  1 ano e 3 meses
                </li>
              </ul>
            </div>
            <div className="flex flex-1 items-center p-5 rounded bg-zinc-200 text-sky-700 tracking-wider font-medium">
              <ul>
                <li>
                  <span className="font-bold mr-1">
                    Cargo:
                  </span>
                  Micro Empreendedor Individual
                </li>
                <li>
                  <span className="font-bold mr-1">
                    Instituição:
                  </span>
                  Escritório residencial
                </li>
                <li>
                  <span className="font-bold mr-1">
                    Atividade:
                  </span>
                  Desenvolvimento de aplicações da web (em ascenção)
                </li>
                <li>
                  <span className="font-bold mr-1">
                    Período: 
                  </span>
                  atuando
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex border-t border-zinc-200 p-10">
        <div className="flex flex-col flex-1 items-center justify-center gap-2">
          <div className="flex-1 flex items-center gap-3">
            <GithubLogo size={24} />
            <div className="flex gap-2">
              <span className="text-sm font-medium tracking-wider">
                https://www.github.com/gabriel-torres-brum
              </span>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-3">
            <LinkedinLogo />
            <div className="flex gap-2">
              <span className="text-sm font-medium tracking-wider">
                https://www.linkedin.com/in/gabriel-torres-brum
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
