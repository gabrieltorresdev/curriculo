import { FaBuilding, FaBuildingUser, FaClock, FaIdCard } from "react-icons/fa6";
import { useAppContext } from "../hook/useAppContext";

interface ExperienciaProfissionalInterface {
  cargo: string;
  instituicao: string;
  periodo: string;
}

export default function ExperienciaProfissional({
  cargo,
  instituicao,
  periodo,
}: ExperienciaProfissionalInterface) {
  const app = useAppContext();
  return (
    <div className="flex flex-col text-sm font-medium gap-1 py-2.5">
      <div className="flex items-center gap-1.5">
        <FaIdCard className="text-emerald-300" title={app.isPT() ? "Cargo" : "Position"} size={20} />
        {cargo}
      </div>
      <div className="flex items-center gap-1.5">
        <FaBuildingUser className="text-emerald-300" title={app.isPT() ? "Instituição" : "Company"} size={20} />
        {instituicao}
      </div>
      <div className="flex items-center gap-1.5">
        <FaClock className="text-emerald-300" title={app.isPT() ? "Período" : "Period"} size={20} />
        {periodo}
      </div>
    </div>
  );
}
