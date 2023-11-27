import { FaGithub, FaLinkedin, FaPrint } from "react-icons/fa6";
import { useAppContext } from "../hook/useAppContext";
import { HiOutlineLanguage } from "react-icons/hi2";

export default function Titulo() {
  const app = useAppContext();

  return (
    <div className="flex flex-col px-5 gap-2.5">
      <div className="flex justify-between gap-5">
        <strong className="text-center text-3xl font-normal">
          Gabriel Torres
        </strong>
        <div className="flex items-center gap-2.5">
          <FaPrint
            title={app.isPT() ? 'Salvar/Imprimir' : 'Save/Print'}
            className="cursor-pointer"
            onClick={() => window.print()}
          />
          <button
            title={app.isPT() ? 'Change to english' : 'Mudar para português'}
            onClick={() => app.changeLanguage(app.isPT() ? "en" : "pt")}
            className="font-bold appearance-none"
          >
            <HiOutlineLanguage size={20} />
          </button>
          <a
            target="_blank"
            href="https://www.github.com/gabrieltorresdev"
            className="group-hover:opacity-95 transition
                  text-sm font-medium"
          >
            <FaGithub size={20} title={app.isPT() ? "Meu GitHub" : "My GitHub"} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/gabriel-torres-brum"
            className="group-hover:opacity-95 transition
                  text-sm font-medium"
          >
            <FaLinkedin size={20} title={app.isPT() ? "Meu Linkedin" : "My Linkedin"} />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <span className="text-lg font-bold">{}</span>
        <strong className="font-normal text-justify">
          {app.isPT()
            ? `Busco uma posição como Desenvolvedor Backend (ou Frontend), almejando
            contribuir ativamente para a evolução tecnológica em um ambiente
            dinâmico. Estou comprometido em aprimorar minhas soft skills e agregar
            valor a projetos inovadores.`
            : `Seeking a role as a Backend (or Frontend) Developer,
              with the goal of actively contributing to technological progress in a dynamic environment.
              Committed to improving my soft skills and bringing value to innovative projects.`}
        </strong>
      </div>
    </div>
  );
}
