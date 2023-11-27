import moment from "moment";
import { FaGraduationCap, FaIdCard, FaLanguage } from "react-icons/fa6";
import { useAppContext } from "../hook/useAppContext";

export default function SobreMim() {
  const app = useAppContext();

  return (
    <div className="flex flex-col gap-2.5 px-5">
      <span className="text-lg font-bold">
        {app.isPT() ? 'Sobre Mim' : 'About Me'}
      </span>
      <div className="flex justify-start gap-2.5">
        <FaIdCard size={20} />
        <span className="text-sm font-medium">
          {moment().diff("1999-04-01", "years")} {
            app.isPT() ? 'Anos' : 'Years Old'
          }
        </span>
      </div>
      <div className="flex justify-start gap-2.5">
        <FaGraduationCap size={20} />
        <span className="text-sm font-medium">
          {app.isPT()
            ? "Ensino Superior Incompleto"
            : "Incomplete Higher Education"}
        </span>
      </div>
    </div>
  );
}
