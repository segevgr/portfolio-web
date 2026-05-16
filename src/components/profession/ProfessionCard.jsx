import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faInfinity,
  faCubes,
  faChartLine,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  "Cloud Infrastructure": faCloud,
  "CI/CD Pipelines": faInfinity,
  "Container Orchestration": faCubes,
  "Monitoring & Observability": faChartLine,
  "DevSecOps & Automation": faShieldHalved,
};

const ProfessionCard = ({ highlighted, title, description }) => {
  const icon = iconMap[title] || faCloud;

  return (
    <div
      className={`w-4/5 mx-auto md:w-full h-72 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 ${
        highlighted
          ? "md:scale-100 shadow-2xl bg-secondary"
          : "md:scale-75 opacity-80 shadow-xl bg-lightBlue"
      }`}
    >
      <div className="flex flex-col gap-4">
        <FontAwesomeIcon
          icon={icon}
          className={`text-3xl transition-colors duration-300 ${
            highlighted ? "text-white" : "text-secondary"
          }`}
        />
        <h3
          className={`text-center font-bold transition-all duration-300 text-2xl ${
            highlighted ? "text-background" : "md:text-xl"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-center text-sm font-normal max-w-[250px] px-2 ${
            highlighted ? "text-softWhite" : "text-textSecondary"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProfessionCard;
