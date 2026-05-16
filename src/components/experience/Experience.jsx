import FadeOnScroll from "../utilComponents/FadeOnScroll";
import SectionContainer from "../utilComponents/SectionContainer";
import { layoutWidth, secondaryTitle } from "../../utils/layout";
import { experienceData } from "./experienceData";

const Experience = () => {
  return (
    <SectionContainer
      id="experience"
      title={"My Experience"}
      additionalStyle={"mt-16 md:mt-28"}
    >
      <div className={`px-5 flex flex-col items-start ${layoutWidth}`}>
        {experienceData.map((item, index) => (
          <FadeOnScroll key={index}>
            <div
              className={`flex flex-col gap-y-2 ${
                index !== 0 && "mt-16 md:mt-20"
              }`}
            >
              <p className="text-xl text-secondary">{item.place}</p>
              <div className={`text-4xl md:text-6xl ${secondaryTitle}`}>
                {item.title}
              </div>
              <div className="flex flex-row text-base text-secondary">
                <p className="text-textPrimary">{`${item.years} |`}</p>
                {item.technologies.map((tech, index) => (
                  <p key={index} className="pl-2">{`${tech} ${
                    index !== item.technologies.length - 1 ? "●" : ""
                  }`}</p>
                ))}
              </div>
              {item.bullets?.length > 0 && (
                <ul className="mt-3 space-y-2 list-disc list-inside text-textSecondary text-sm leading-relaxed max-w-2xl">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </FadeOnScroll>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Experience;
