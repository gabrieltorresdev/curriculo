import clipboardCopy from "clipboard-copy";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useAppContext } from "../hook/useAppContext";

export default function Contato() {
  const app = useAppContext();

  const copiar = (e: any) => {
    clipboardCopy(e.target.innerText);
    toast(
      app.isPT() ? "Copiado para a área de transferência!" : "Copied to clipboard!"
    );
  };

  return (
    <div className="flex flex-col gap-2.5 px-5">
      <span className="text-lg font-bold">{
        app.isPT() ? 'Contato' : 'Contact'
      }</span>
      <div className="flex gap-2">
        <FaEnvelope size={20} />
        <span
          className="text-sm font-medium hover:cursor-copy"
          onClick={copiar}
        >
          dev.gabriel.torres@gmail.com
        </span>
      </div>
      <div className="flex gap-2">
        <FaPhone size={20} />
        <span
          className="text-sm font-medium hover:cursor-copy"
          onClick={copiar}
        >
          (21) 9 96676-3047
        </span>
      </div>
    </div>
  );
}
